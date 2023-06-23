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
}: {
  task: any;
  isShowSelectBoxes: any;
}) => {
  const { onEditTask } = useContext(DataContext);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [isPinned, setIsPinned] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const _onSelect = () => {
    setIsSelected(!isSelected);
  };

  const _onUnpin = () => {
    setIsPinned(false);
  };

  const _onPin = () => {
    setIsPinned(true);
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

  return (
    <>
      <div className="flex flex-col py-2 px-3 bg-white space-y-4 rounded-lg">
        <div className="flex justify-between items-center text-base">
          <div className="flex items-center space-x-1">
            {isShowSelectBoxes ? (
              <SelectButton isSelected={isSelected} onSelect={_onSelect} />
            ) : null}

            {isPinned ? (
              <SolidStarButton onUnpin={_onUnpin} />
            ) : (
              <OutlineStarButton onPin={_onPin} />
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
            <ChevronUpButton />
            <ChevronDownButton />
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
          <div className="flex space-x-2 text-sm">
            <button
              type="button"
              className="w-1/2 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg"
              onClick={_onCancelEdit}
            >
              Cancel
            </button>
            <button
              type="button"
              className="w-1/2 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg"
              onClick={_onSaveEdit}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};
