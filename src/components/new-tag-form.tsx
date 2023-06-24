import { useContext, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { ColorPickDropDown } from "./index";
import { DataContext } from "../utils/data-context";

export const NewTagForm = () => {
  const { allTag, onAddTag } = useContext(DataContext);
  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("teal-200");
  const { v4: uuidv4 } = require("uuid");

  const _onAddTag = () => {
    if (tagName === "") {
      return;
    }
    for (const name of allTag.map((item: any) => item.name)) {
      if (tagName === name) {
        return;
      }
    }
    const body = {
      id: uuidv4(),
      name: tagName,
      color: tagColor,
    };
    onAddTag(body);
    setTagName("");
  };

  return (
    <div className="flex space-x-2">
      <input
        className="w-4/6 rounded-lg px-2 py-1 text-xs text-gray-700"
        type="text"
        name="tagName"
        id="tagName"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
      />
      <div className="flex w-2/6">
        <div className="w-1/2 flex">
          <ColorPickDropDown color={tagColor} setColor={setTagColor} />
        </div>
        <button type="button" className="w-1/2" onClick={_onAddTag}>
          <PlusIcon className="m-auto w-4 text-[#309a87]" />
        </button>
      </div>
    </div>
  );
};
