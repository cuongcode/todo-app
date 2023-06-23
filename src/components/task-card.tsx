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

  const _onSelect = () => {
    setIsSelected(!isSelected);
  };

  const _onUnpin = () => {
    setIsPinned(false);
  };

  const _onPin = () => {
    setIsPinned(true);
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
            <div className="">{task.title}</div>
            <PencilTaskEditButton />
          </div>
          <div className="flex flex-col">
            <ChevronUpButton />
            <ChevronDownButton />
          </div>
        </div>
        <div className="text-xs text-gray-400">{task.description}</div>
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
