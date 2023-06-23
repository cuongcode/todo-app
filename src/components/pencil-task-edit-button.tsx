import { PencilIcon } from "@heroicons/react/24/outline";

export const PencilTaskEditButton = ({ onEdit }: { onEdit: any }) => {
  return (
    <>
      <button type="button" onClick={onEdit}>
        <PencilIcon className="w-3 text-[#309a87]" />
      </button>
    </>
  );
};
