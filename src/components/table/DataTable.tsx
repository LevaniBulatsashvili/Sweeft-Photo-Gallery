import React from "react";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

interface IDataTAble<T> {
  data: T[];
  loading: boolean;
  currentPage: number;
  allPages: number;
  renderItem: (item: T) => React.ReactNode;
  onNextPage: () => void;
  tableSize: number;
  onChangeTableSize: (size: number) => void;
  searchVal?: string;
  onSearch?: (search: string) => void;
}

const DataTable = <T,>({
  data,
  loading,
  currentPage,
  allPages,
  renderItem,
  onNextPage,
  searchVal,
  onSearch,
  tableSize,
  onChangeTableSize,
}: IDataTAble<T>) => {
  return (
    <div className="w-full min-h-[82dvh] flex flex-col justify-between">
      {onSearch && (
        <div className="flex items-center justify-center mb-2">
          <SearchBar
            onSearch={onSearch}
            disabled={loading}
            searchVal={searchVal}
          />
        </div>
      )}

      <ItemList
        items={data}
        renderItem={renderItem}
        onMaxScroll={onNextPage}
        loading={loading}
      />

      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        tableSize={tableSize}
        onChangeTableSize={onChangeTableSize}
      />
    </div>
  );
};

export default DataTable;
