interface ITableSizeControl {
  tableSize: number;
  sizeSettings: number[];
  onChangeTableSize: (size: number) => void;
}

const TableSizeControl = ({
  tableSize,
  sizeSettings,
  onChangeTableSize,
}: ITableSizeControl) => {
  return (
    <div className="absolute right-0 flex justify-end">
      <label className="flex items-center gap-2 text-sm text-gray-600">
        Items:
        <select
          className="border border-gray-300 rounded px-2 py-1 text-sm"
          value={tableSize}
          onChange={(e) => onChangeTableSize(Number(e.target.value))}
        >
          {sizeSettings.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default TableSizeControl;
