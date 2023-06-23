import { useContext, useState } from "react";
import { DataContext } from "../utils/data-context";

export const ChangeStatusDropdown = ({ task }: { task: any }) => {
  const SELECTIONS = ["to-do", "in-progress", "completed"];
  const { onChangeStatus } = useContext(DataContext);
  const [isDropdown, setIsDropdown] = useState(false);

  const _onChangeStatus = (status: any) => {
    onChangeStatus(task, status);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-[#e9f2f1] w-fit text-xs text-gray-400 py-1 px-2 rounded-md"
        onClick={() => setIsDropdown(!isDropdown)}
      >
        {task.status}
      </button>
      {isDropdown ? (
        <div className="z-10 absolute top-7 flex flex-col bg-[#e9f2f1] w-fit text-xs text-gray-400 py-1 px-2 rounded-md">
          {SELECTIONS.map((item: any) => {
            if (item !== task.status) {
              return (
                <button
                  onClick={() => _onChangeStatus(item)}
                  className="text-start hover:text-[#309a87]"
                >
                  {item}
                </button>
              );
            }
            return null;
          })}
        </div>
      ) : null}
    </div>
  );
};
