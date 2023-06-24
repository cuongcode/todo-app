import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DataContext } from "../utils/data-context";

export const MultiEditButton = ({
  status,
  taskList,
}: {
  status: any;
  taskList: any;
}) => {
  const { onDeleteManyTask } = useContext(DataContext);

  const _onDeleteManyTasks = () => {
    const deleteTaskList = taskList.filter(
      (item: any) => item.isSelected === true
    );
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
