import { TagButton, Tag } from "./index";

export const TagSection = ({ task }: { task: any }) => {
  return (
    <>
      <div className="flex space-x-1">
        <TagButton />
        {task.tags.map((item: any) => (
          <div key={item.name}>
            <Tag tag={item} />
          </div>
        ))}
      </div>
    </>
  );
};
