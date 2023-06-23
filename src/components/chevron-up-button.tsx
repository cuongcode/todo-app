import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const ChevronUpButton = ({ onButtonClick }: { onButtonClick: any }) => {
  return (
    <>
      <button type="button" onClick={onButtonClick}>
        <ChevronUpIcon className="w-3 text-[#309a87]" />
      </button>
    </>
  );
};
