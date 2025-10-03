import { useInfiniteQuery } from "@tanstack/react-query";
import Query_Keys from "../../../react-query/query-keys";
import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";
import searchPhotos from "../api/searchPhotos";
import fetchPhotos from "../api/fetchPhotos";

const useFetchOrSearchPhotos = (search: string, perPage: number = 20) => {
  return useInfiniteQuery<IPhotoSearchRes>({
    queryKey: [Query_Keys.searchPhotos, search, perPage],
    queryFn: ({ pageParam = 1 }) =>
      search
        ? searchPhotos(search, pageParam as number, perPage)
        : fetchPhotos(pageParam as number, perPage),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.total_pages && allPages.length < lastPage.total_pages) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
};

export default useFetchOrSearchPhotos;
