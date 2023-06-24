import { useContext, useState } from "react";

import { TagIcon } from "@heroicons/react/24/outline";

import { Tag, NewTagForm } from "./index";
import { DataContext } from "../utils/data-context";

export const TagDropdown = () => {
  const { allTag } = useContext(DataContext);
  const [isDropdown, setIsDropdown] = useState(false);

  const _onTagClick = () => {
    //
  }

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
            {allTag.map((item: any) => (
              <button type="button" key={item.id} onClick={_onTagClick}>
                <Tag tag={item} />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
