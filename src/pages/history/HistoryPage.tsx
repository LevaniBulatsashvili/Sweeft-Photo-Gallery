import { useState, type ChangeEvent } from "react";
import SelectInput from "../../components/inputs/SelectInput";
import { getSearchHistory } from "../../features/history/utils/searchHistory";
import ErrorBoundary from "../../components/fallback/ErrorBoundary";
import PhotoTable from "../../features/photos/components/PhotoTable";
import { stringToNum } from "../../utils/stringToNum";
import useFetchOrSearchPhotos from "../../features/photos/hooks/useFetchPhotos";

const HistoryPage = () => {
  const searchHistory = getSearchHistory();
  const [searchKeyword, setSearchKeyword] = useState(
    localStorage.getItem("searchTerm") ?? ""
  );

  const [perPage, setPerPage] = useState(
    stringToNum(localStorage.getItem("pageSize"), 20)
  );

  const { data, isLoading, isFetchingNextPage, error, fetchNextPage } =
    useFetchOrSearchPhotos(searchKeyword, perPage);

  const onChangeTableSize = (size: number) => {
    setPerPage(size);
    localStorage.setItem("pageSize", size.toString());
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchKeyword(e.target.value);
    localStorage.setItem("searchTerm", e.target.value);
  };

  return (
    <ErrorBoundary error={error}>
      <SelectInput
        name="history"
        value={searchKeyword}
        onChange={(e) => onSelectChange(e)}
        options={searchHistory}
      />

      <PhotoTable
        loading={isLoading || isFetchingNextPage}
        data={{
          results: data?.pages.flatMap((page) => page.results) ?? [],
          total: data?.pages[0]?.total ?? 0,
          total_pages: data?.pages[0]?.total_pages ?? 0,
        }}
        currentPage={data?.pages.length ?? 0}
        allPages={data?.pages[0].total_pages ?? 0}
        onNextPage={fetchNextPage}
        tableSize={perPage}
        onChangeTableSize={onChangeTableSize}
      />
    </ErrorBoundary>
  );
};

export default HistoryPage;
