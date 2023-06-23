import { ChevronDownIcon } from "@heroicons/react/24/solid";

export const ChevronDownButton = ({
  onButtonClick,
}: {
  onButtonClick: any;
}) => {
  return (
    <>
      <button type="button" onClick={onButtonClick}>
        <ChevronDownIcon className="w-3 text-[#309a87]" />
      </button>
    </>
  );
};
