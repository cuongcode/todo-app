import {
  SelectButton,
  OutlineStarButton,
  SolidStarButton,
  PencilEditButton,
  ChevronUpButton,
  ChevronDownButton,
  TagButton,
  Tag,
} from "./index";

export const TaskCard = ({ task }: { task: any }) => {
  return (
    <>
      <div className="flex flex-col py-2 px-3 bg-white space-y-4 rounded-lg">
        <div className="flex justify-between items-center text-base">
          <div className="flex items-center space-x-1">
            <SelectButton />
            <OutlineStarButton />
            <SolidStarButton />
            <div>{task.title}</div>
            <PencilEditButton />
          </div>
          <div className="flex flex-col">
            <ChevronUpButton />
            <ChevronDownButton />
          </div>
        </div>
        <div className="text-xs text-gray-400">{task.description}</div>
        <div className="flex space-x-1">
          <TagButton />
          {task.tags.map((item:any) => <div key={item.name}><Tag tag={item}/></div>)}
        </div>
      </div>
    </>
  );
};