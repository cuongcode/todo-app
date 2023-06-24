import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

import { NewTaskForm } from "./index";

export const AddTaskButton = ({status}:{status:any}) => {
  const [isAdd, setIsAdd] = useState(false)

  const _onCancel = () => {
    setIsAdd(false)
  }

  return (
    <>
      <button onClick={()=>setIsAdd(true)} className="flex items-center justify-center bg-[#e9f2f1] rounded-lg text-[#309a87] p-3 h-9">
        <PlusIcon className="w-4" />
      </button>
      {isAdd ? <NewTaskForm status={status} onCancel={_onCancel}/> : null}
    </>
  );
};
