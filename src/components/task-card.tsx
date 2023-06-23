import { useState } from "react";

import {
  SelectButton,
  OutlineStarButton,
  SolidStarButton,
  PencilTaskEditButton,
  ChevronUpButton,
  ChevronDownButton,
  TagButton,
  Tag,
  ChangeStatusDropdown,
} from "./index";

export const TaskCard = ({
  task,
  isShowSelectBoxes,
}: {
  task: any;
  isShowSelectBoxes: any;
}) => {
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
    setIsEdit(!isEdit);
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
                value={task.title}
                className="bg-gray-100 w-full text-sm text-gray-500 rounded-md p-1"
              />
            ) : (
              <div className="">{task.title}</div>
            )}
            <PencilTaskEditButton onEdit={_onEdit} />
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
            value={task.description}
            className="bg-gray-100 w-full text-xs text-gray-400 rounded-md p-1"
          />
        ) : (
          <div className="text-xs text-gray-400">{task.description}</div>
        )}
        <ChangeStatusDropdown task={task} />
        <div className="flex space-x-1">
          <TagButton />
          {task.tags.map((item: any) => (
            <div key={item.name}>
              <Tag tag={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
