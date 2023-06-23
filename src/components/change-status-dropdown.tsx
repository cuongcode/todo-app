import { useState } from "react";

export const ChangeStatusDropdown = ({ task }: { task: any }) => {
  const SELECTIONS = ["to-do", "in-progress", "completed"];
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-[#e9f2f1] w-fit text-xs text-gray-400 py-1 px-2 rounded-md"
        onClick={()=>setIsDropdown(!isDropdown)}
      >
        {task.status}
      </button>
      {isDropdown ? (
        <div className="absolute top-7 flex flex-col bg-[#e9f2f1] w-fit text-xs text-gray-400 py-1 px-2 rounded-md">
          {SELECTIONS.map((item: any) => {
            if (item !== task.status) {
              return (
                <button className="text-start hover:text-[#309a87]">
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
