import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

import { NewTaskForm } from "./index";

export const AddTaskButton = () => {
  const [isAdd, setIsAdd] = useState(false)

  const _onCancel = () => {
    setIsAdd(false)
  }

  return (
    <>
      <button onClick={()=>setIsAdd(true)} className="flex bg-[#e9f2f1] rounded-lg text-[#309a87] p-3 justify-center">
        <PlusIcon className="w-4" />
      </button>
      {isAdd ? <NewTaskForm onCancel={_onCancel}/> : null}
    </>
  );
};
