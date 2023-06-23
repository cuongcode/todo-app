import { PencilIcon } from "@heroicons/react/24/outline";

export const PencilMultiEditButton = ({
  onShowSelectBox,
}: {
  onShowSelectBox: any;
}) => {

  return (
    <>
      <button type="button" onClick={onShowSelectBox}>
        <PencilIcon className="w-3 text-[#309a87]" />
      </button>
    </>
  );
};
