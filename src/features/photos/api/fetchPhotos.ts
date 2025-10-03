import { REQUEST } from "../../../apiConfig";
import $apiAxios from "../../../http/apiAxios";
import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";

let total: number;

const fetchPhotos = async (
  page: number,
  perPage: number
): Promise<IPhotoSearchRes> => {
  if (!total)
    total = (await $apiAxios.get(`${REQUEST.PHOTOSTATS}`)).data.photos;
  const res = await $apiAxios.get(
    `${REQUEST.PHOTOS}?page=${page}&per_page=${perPage}&order_by=popular`
  );

  return {
    results: res.data,
    total: total,
    total_pages: Math.ceil(total / perPage),
  };
};

export default fetchPhotos;
