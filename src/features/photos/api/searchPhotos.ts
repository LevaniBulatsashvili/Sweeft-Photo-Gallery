import { REQUEST } from "../../../apiConfig";
import $apiAxios from "../../../http/apiAxios";

const searchPhotos = async (search: string, page: number, perPage: number) => {
  if (!search.trim())
    return {
      results: [],
      total_pages: 0,
      total: 0,
    };

  const { data } = await $apiAxios.get(
    `${REQUEST.SEARCHPHOTOS}?query=${search}&page=${page}&per_page=${perPage}&order_by=popular`
  );
  return data;
};

export default searchPhotos;
