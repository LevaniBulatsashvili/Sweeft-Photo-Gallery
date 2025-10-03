import { useQuery } from "@tanstack/react-query";
import Query_Keys from "../../../react-query/query-keys";
import type { IPhotoStatistics } from "../../../interfaces/photo.interface";
import fetchPhotoStatistics from "../api/fetchPhotoStatistics";

const useFetchPhotoStatistics = (photoId: string) => {
  return useQuery<IPhotoStatistics>({
    queryKey: [Query_Keys.getPhotoStatistics, photoId],
    queryFn: () => fetchPhotoStatistics(photoId),
  });
};

export default useFetchPhotoStatistics;
