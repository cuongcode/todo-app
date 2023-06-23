import { useState } from "react";

import { PencilMultiEditButton, AddTaskButton, TaskCard } from "./index";

export const StatusColumn = ({ status, data }: { status: string; data: any }) => {
  const STATUS_TITLE = {
    "to-do": "To do",
    "in-progress": "In progress",
    completed: "Completed",
  };
  const [isShowSelectBoxes, setisShowSelectBoxes] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);

  const _onShowSelectBox = () => {
    setisShowSelectBoxes(!isShowSelectBoxes);
  };
  return (
    <div className="flex flex-col w-full md:w-1/3 bg-[#f5f9f9] rounded-xl p-3 space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div>{STATUS_TITLE[status as keyof typeof STATUS_TITLE]}</div>
          <div className="bg-[#e9f2f1] py-1 px-2 rounded-md text-[#309a87] text-xs">
            {data.length}
          </div>
        </div>
        <PencilMultiEditButton onShowSelectBox={_onShowSelectBox} />
      </div>

      <AddTaskButton status={status} />

      <div className="flex flex-col space-y-3">
        {data.map((item: any) => (
          <div key={item.title}>
            <TaskCard task={item} isShowSelectBoxes={isShowSelectBoxes} />
          </div>
        ))}
      </div>
    </div>
  );
};
