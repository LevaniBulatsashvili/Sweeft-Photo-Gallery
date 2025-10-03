import TableSizeControl from "./TableSizeControl";

interface IPagination {
  currentPage: number;
  allPages: number;
  tableSize: number;
  onChangeTableSize: (size: number) => void;
}

const Pagination = ({
  currentPage,
  allPages,
  tableSize,
  onChangeTableSize,
}: IPagination) => {
  return (
    <div className="relative flex justify-between items-center mt-4">
      <div className="flex items-center justify-center grow">
        <span className="text-md text-gray-700 font-bold font-mono text-center w-[150px]">
          Page {String(currentPage).padStart(2, "0")} of{" "}
          {String(allPages).padStart(2, "0")}
        </span>
      </div>

      <TableSizeControl
        tableSize={tableSize}
        sizeSettings={[10, 20, 30]}
        onChangeTableSize={onChangeTableSize}
      />
    </div>
  );
};

export default Pagination;
