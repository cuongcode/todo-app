import { useState } from "react";

import { TagIcon } from "@heroicons/react/24/outline";

import { Tag, NewTagForm } from "./index";

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
          <NewTagForm />
          <div className="flex flex-wrap space-x-1 space-y-1 items-baseline">
            <Tag tag={{ name: "read", color: "red" }} />
            <Tag tag={{ name: "play", color: "blue" }} />
            <Tag tag={{ name: "chill", color: "green" }} />
            <Tag tag={{ name: "watch", color: "orange" }} />
            <Tag tag={{ name: "watch", color: "amber" }} />
            <Tag tag={{ name: "watch", color: "teal" }} />
            <Tag tag={{ name: "watch", color: "cyan" }} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
