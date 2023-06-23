import { useState } from "react";

import { TagButton } from "./index";

export const NewTaskForm = ( {onCancel}:{onCancel:any} ) => {
  return (
    <>
      <div className="flex flex-col py-2 px-3 bg-white space-y-4 rounded-lg text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <div>task:</div>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-100 w-full text-sm text-gray-500 rounded-md p-1"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="description"
            id="description"
            className="bg-gray-100 w-full text-xs text-gray-400 rounded-md p-1"
          />
        </div>

        <div className="flex space-x-1">
          <TagButton />
        </div>
        <div className="flex space-x-2">

        <button onClick={onCancel} type="button" className="w-1/2 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg">Cancel</button>
        <button type="button" className="w-1/2 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg">Save</button>
        </div>
      </div>
    </>
  );
};
