import { REQUEST } from "../../../apiConfig";
import $apiAxios from "../../../http/apiAxios";
import type { IPhotoStatistics } from "../../../interfaces/photo.interface";

const fetchPhotoStatistics = async (
  photoId: string
): Promise<IPhotoStatistics> =>
  (await $apiAxios.get(`${REQUEST.PHOTOS}/${photoId}/statistics`)).data;

export default fetchPhotoStatistics;
