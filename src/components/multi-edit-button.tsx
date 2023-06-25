import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DataContext } from "../utils/data-context";
import { countItemInArray } from "../utils/base";

export const MultiEditButton = ({
  status,
  taskList,
}: {
  status: any;
  taskList: any;
}) => {
  const { usedTags, allTag, onDeleteManyTask, onDeleteManyTag } =
    useContext(DataContext);
  const usedTagIds = usedTags.map((item: any) => item.id);

  const _onDeleteManyTasks = () => {
    const deleteTaskList = taskList.filter(
      (item: any) => item.isSelected === true
    );

    const tagList = deleteTaskList.map((item: any) => [...item.tags]).flat();
    const tagIds = tagList.map((item: any) => item.id);
    const uniqueTagIds = Array.from(new Set(tagIds.map((item: any) => item)));
    const countUniqueTags = uniqueTagIds.map((item: any) =>
      countItemInArray(item, tagIds)
    );
    const deleteTagIds = uniqueTagIds.filter(
      (item: any, index) =>
        countItemInArray(item, usedTagIds) === countUniqueTags[index]
    );
    const deleteTagList = allTag.filter((item: any, index: any) =>
      deleteTagIds.includes(item.id)
    );
    onDeleteManyTag(deleteTagList);

    onDeleteManyTask(deleteTaskList);
  };

  return (
    <>
      <div className="flex space-x-2">
        <button
          className="flex items-center justify-center bg-red-100 rounded-lg text-[#309a87] p-3 h-9"
          onClick={_onDeleteManyTasks}
        >
          <TrashIcon className="w-4" />
        </button>
        <div className="grow relative">
          <button className="w-full flex items-center justify-center bg-[#e9f2f1] rounded-lg text-[#309a87] p-3 h-9">
            {status}
          </button>
        </div>
      </div>
    </>
  );
};
