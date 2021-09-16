import {FetchObject} from "src/interfaces/ComponentsInterfaces";
import axios from "axios";
import {
  IdParameterInterface,
  QueryParametersInterface,
  RequestResponseInterface
} from "../interfaces/ComponentsInterfaces";

const API_KEY = "usJhdOuMAY8QeXFMb6GhSKgSGbOn5pH7SzDM9NPT-f0";

export const getData = async ({
  query,
  elementsOnPage,
  page,
  orient,
  color,
  orderBy
}: QueryParametersInterface): Promise<RequestResponseInterface> => {
  const reuslt = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}&per_page=${elementsOnPage}&orientation=${orient}&color=${color}&order_by=${orderBy}`
  );
  return reuslt.data;
};
export const getDataById = async (id: string): Promise<FetchObject> => {
  const reuslt = await axios.get(`https://api.unsplash.com/photos/${id}/?client_id=${API_KEY}`);
  return reuslt.data;
};
