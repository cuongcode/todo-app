import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import {ColorPickDropDown} from './index'

export const NewTagForm = () => {
  const [tagName, setTagName] = useState("");

  return (
    <div className="flex space-x-2">
      <input
        className="w-4/6 rounded-lg"
        type="text"
        name="tagName"
        id="tagName"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
      />
      <div className="flex w-2/6">
        <div className="w-1/2 flex">
            <ColorPickDropDown/>
        </div>
        <button type="button" className="w-1/2">
          <PlusIcon className="m-auto w-4 text-[#309a87]" />
        </button>
      </div>
    </div>
  );
};
