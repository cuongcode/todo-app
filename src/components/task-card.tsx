import { useContext, useState } from "react";

import {
  SelectButton,
  OutlineStarButton,
  SolidStarButton,
  PencilTaskEditButton,
  ChevronUpButton,
  ChevronDownButton,
  ChangeStatusDropdown,
  TagSection,
} from "./index";
import { DataContext } from "../utils/data-context";

export const TaskCard = ({
  task,
  isShowSelectBoxes,
  selfIndex,
  sourceData,
}: {
  task: any;
  isShowSelectBoxes: any;
  selfIndex: any;
  sourceData:any
}) => {
  const {usedTags, onEditTask, onPinUnpin, onSwitchTaskPosition, onDeleteTask, onDeleteTag } = useContext(DataContext);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [isSelected, setIsSelected] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const upperTask = sourceData[selfIndex-1]
  const lowerTask = sourceData[selfIndex+1]

  const _onSelect = () => {
    setIsSelected(!isSelected);
  };

  const _onPinUnpin = () => {
    onPinUnpin(task)
  };

  const _onEdit = () => {
    setIsEdit(true);
  };

  const _onCancelEdit = () => {
    setIsEdit(false);
    setTitle(task.title);
    setDescription(task.description);
  };

  const _onSaveEdit = () => {
    onEditTask(task, title, description)
    _onCancelEdit()
  };

  const _onDeleteTask = () => {
    if (task.tags.length > 0) {
      for (const tag of task.tags) {
        if (usedTags.filter((item:any)=>item.id===tag.id).length === 1) {
          onDeleteTag(tag)
        }
      }
    }
    onDeleteTask(task)
  }

  const _onMoveUp = () => {
    if (task.isPinned === false && selfIndex === 0) {
      _onPinUnpin()
      return
    }
    onSwitchTaskPosition(task, upperTask)
  }

  const _onMoveDown = () => {
    if (task.isPinned === true && selfIndex === sourceData.length-1) {
      _onPinUnpin()
      return
    }
    onSwitchTaskPosition(task, lowerTask)
  }

  return (
    <>
      <div className="flex flex-col py-2 px-3 bg-white space-y-4 rounded-lg">
        <div className="flex justify-between items-center text-base">
          <div className="flex items-center space-x-1">
            {isShowSelectBoxes ? (
              <SelectButton isSelected={isSelected} onSelect={_onSelect} />
            ) : null}

            {task.isPinned ? (
              <SolidStarButton onUnpin={_onPinUnpin} />
            ) : (
              <OutlineStarButton onPin={_onPinUnpin} />
            )}

            {isEdit ? (
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                className="bg-gray-100 w-full text-sm text-gray-500 rounded-md p-1"
              />
            ) : (
              <div className="">{task.title}</div>
            )}

            {isEdit ? null : <PencilTaskEditButton onEdit={_onEdit} />}
          </div>
          <div className="flex flex-col">
            {selfIndex === 0 && task.isPinned === true ? null : <ChevronUpButton onButtonClick={_onMoveUp}/>}
            {selfIndex === sourceData.length-1 && task.isPinned === false ? null : <ChevronDownButton onButtonClick={_onMoveDown}/>}
          </div>
        </div>
        {isEdit ? (
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            className="bg-gray-100 w-full text-xs text-gray-400 rounded-md p-1"
          />
        ) : (
          <div className="text-xs text-gray-400">{task.description}</div>
        )}

        <ChangeStatusDropdown task={task} />

        <TagSection task={task} />

        {isEdit ? (
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex space-x-2 ">
              <button
                type="button"
                className="w-1/3 bg-red-100 text-[#309a87] text-xs py-1 rounded-lg"
                onClick={_onDeleteTask}
              >
                Delete
              </button>
              <button
                type="button"
                className="w-2/3 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg"
                onClick={_onSaveEdit}
              >
                Save
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg"
                onClick={_onCancelEdit}
              >
                Cancel
              </button>

            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
