import { useState } from "react";

import { TagIcon,PlusIcon } from "@heroicons/react/24/outline";

import { Tag } from "./index";

export const TagDropdown = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="relative flex w-full">
      <button
        onClick={() => setIsDropdown(!isDropdown)}
        className="flex text-xs text-gray-400 items-center"
      >
        <span>
          <TagIcon className="w-4 mr-1" />
        </span>
        tags:
      </button>
      {isDropdown ? (
        <div className="z-10 absolute top-5 flex flex-col space-y-2 bg-[#e9f2f1] p-2 rounded-lg w-fit">
          <div className="flex space-x-2">
            <input className="w-4/6 rounded-lg" type="text"></input>
            <div className="flex w-2/6">
              <button className="w-1/2 bg-red-300 rounded-lg"></button>
              <button type="button" className="w-1/2"><PlusIcon className="m-auto w-4 text-[#309a87]"/></button>
            </div>
          </div>
          <div className="flex flex-wrap space-x-1 space-y-1 items-baseline">
            <Tag tag={{ name: "read", color: "red" }} />
            <Tag tag={{ name: "play", color: "blue" }} />
            <Tag tag={{ name: "chill", color: "green" }} />
            <Tag tag={{ name: "watch", color: "yellow" }} />
            <Tag tag={{ name: "watch", color: "yellow" }} />
            <Tag tag={{ name: "watch", color: "yellow" }} />
            <Tag tag={{ name: "watch", color: "yellow" }} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
