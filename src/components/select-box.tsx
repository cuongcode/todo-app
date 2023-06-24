export const SelectBox = ({
  isSelected,
  onSelect,
}: {
  isSelected: any;
  onSelect: any;
}) => {
  return (
    <>
      <button type="button" onClick={onSelect}>
        <div className="flex border-2 rounded-md border-[#309a87] w-4 h-4 justify-center items-center">
          {isSelected ? (
            <div className="bg-[#309a87] rounded-md w-2 h-2"></div>
          ) : null}
        </div>
      </button>
    </>
  );
};
