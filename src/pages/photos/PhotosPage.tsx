import { useState } from "react";
import useFetchOrSearchPhotos from "../../features/photos/hooks/useFetchPhotos";
import PhotoTable from "../../features/photos/components/PhotoTable";
import ErrorBoundary from "../../components/fallback/ErrorBoundary";
import { stringToNum } from "../../utils/stringToNum";
import { cacheSearchKeyword } from "../../features/history/utils/searchHistory";

const PhotosPage = () => {
  const [search, setSearch] = useState(
    localStorage.getItem("searchTerm") ?? ""
  );
  const [perPage, setPerPage] = useState(
    stringToNum(localStorage.getItem("pageSize"), 20)
  );

  const { data, isLoading, isFetchingNextPage, error, fetchNextPage } =
    useFetchOrSearchPhotos(search, perPage);

  const onSearch = (searchFor: string) => {
    const trimmed = searchFor.trim();
    if (search !== trimmed) localStorage.setItem("currentPage", "1");

    setSearch(trimmed);
    localStorage.setItem("searchTerm", trimmed);
    if (trimmed) cacheSearchKeyword(trimmed);
  };

  const onChangeTableSize = (size: number) => {
    setPerPage(size);
    localStorage.setItem("pageSize", size.toString());
  };

  return (
    <ErrorBoundary error={error}>
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
        searchVal={search}
        onSearch={onSearch}
        tableSize={perPage}
        onChangeTableSize={onChangeTableSize}
      />
    </ErrorBoundary>
  );
};

export default PhotosPage;
