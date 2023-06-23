import { useState } from "react";

import { TagDropdown, Tag } from "./index";

export const TagSection = ({ task }: { task: any }) => {
  return (
    <>
      <div className="flex flex-wrap space-x-1 space-y-1">
        <TagDropdown />
        {task.tags.map((item: any) => (
          <div key={item.name}>
            <Tag tag={item} />
          </div>
        ))}
      </div>
    </>
  );
};
