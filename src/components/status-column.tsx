import { useContext, useState } from "react";

import {
  PencilMultiEditButton,
  AddTaskButton,
  TaskCard,
  FilterButton,
  MultiEditButton,
} from "./index";

import {STATUS_TITLE} from '../utils/index'

import { DataContext } from "../utils/data-context";

export const StatusColumn = ({
  status,
  data,
}: {
  status: string;
  data: any;
}) => {
  const {onUnselect} = useContext(DataContext)
  const [isShowSelectBoxes, setisShowSelectBoxes] = useState(false);

  const pinData = data.filter((item: any) => item.isPinned === true);
  const unpinData = data.filter((item: any) => item.isPinned === false);

  const _onShowSelectBox = () => {
    setisShowSelectBoxes(!isShowSelectBoxes);
    for (const task of data) {
      onUnselect(task)
    }
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
        <div className="flex items-center space-x-2">
          <PencilMultiEditButton onShowSelectBox={_onShowSelectBox} />
          <FilterButton />
        </div>
      </div>

      {isShowSelectBoxes ? (
        <MultiEditButton status={status} taskList={data}/>
      ) : (
        <AddTaskButton status={status} />
      )}

      <div className="flex flex-col space-y-3">
        {pinData.map((item: any, index: any) => (
          <div key={item.id}>
            <TaskCard
              task={item}
              isShowSelectBoxes={isShowSelectBoxes}
              selfIndex={index}
              sourceData={pinData}
            />
          </div>
        ))}
        {unpinData.map((item: any, index: any) => (
          <div key={item.id}>
            <TaskCard
              task={item}
              isShowSelectBoxes={isShowSelectBoxes}
              selfIndex={index}
              sourceData={unpinData}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
