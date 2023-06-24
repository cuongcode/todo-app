import { useContext } from "react";
import { TagDropdown, Tag } from "./index";
import { DataContext } from "../utils/data-context";

export const TagSection = ({ task }: { task: any }) => {
  const { onUntag } = useContext(DataContext);

  const _onUntag = (tag: any) => {
    onUntag(task, tag);
  };

  return (
    <>
      <div className="flex flex-wrap space-x-1 space-y-1">
        <TagDropdown task={task} />
        {task.tags.map((item: any) => (
          <button type="button" key={item.id} onClick={() => _onUntag(item)}>
            <Tag tag={item} />
          </button>
        ))}
      </div>
    </>
  );
};
