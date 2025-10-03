import axios from "axios";
import { BASE_URL } from "../apiConfig";

const API_KEY = import.meta.env.VITE_API_KEY;

const $apiAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export default $apiAxios;
