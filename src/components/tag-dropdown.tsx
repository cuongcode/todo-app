import { useState } from "react";

import { TagIcon } from "@heroicons/react/24/outline";

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
        <div className="z-10 absolute top-5 flex flex-wrap space-x-1 space-y-1 bg-[#e9f2f1] pt-1 pb-2 px-2 rounded-lg w-fit items-baseline">
          <Tag tag={{ name: "read", color: "red" }} />
          <Tag tag={{ name: "play", color: "blue" }} />
          <Tag tag={{ name: "chill", color: "green" }} />
          <Tag tag={{ name: "watch", color: "yellow" }} />
          <Tag tag={{ name: "watch", color: "yellow" }} />
          <Tag tag={{ name: "watch", color: "yellow" }} />
          <Tag tag={{ name: "watch", color: "yellow" }} />
        </div>
      ) : null}
    </div>
  );
};
