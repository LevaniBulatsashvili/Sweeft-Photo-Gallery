import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";
import DataTable from "../../../components/table/DataTable";
import PhotoCard from "./PhotoCard";

interface IPhotoTable {
  data: IPhotoSearchRes | undefined;
  loading: boolean;
  currentPage: number;
  allPages: number;
  onNextPage: () => void;
  tableSize: number;
  onChangeTableSize: (size: number) => void;
  searchVal?: string;
  onSearch?: (search: string) => void;
}

const PhotoTable = ({
  data,
  loading,
  currentPage,
  allPages,
  onNextPage,
  searchVal,
  onSearch,
  tableSize,
  onChangeTableSize,
}: IPhotoTable) => {
  return (
    <div className="rounded-2xl p-2 w-full">
      <DataTable
        data={data?.results || []}
        loading={loading}
        currentPage={currentPage}
        allPages={allPages}
        renderItem={(photo) => <PhotoCard photo={photo} />}
        onNextPage={onNextPage}
        searchVal={searchVal}
        onSearch={onSearch}
        tableSize={tableSize}
        onChangeTableSize={onChangeTableSize}
      />
    </div>
  );
};

export default PhotoTable;
