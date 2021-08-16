import {FetchObject} from "src/interfaces/ComponentsInterfaces";
import axios from "axios";
import {
  IdParameterInterface,
  QueryParametersInterface,
  RequestResponseInterface
} from "../interfaces/ComponentsInterfaces";
// const fetchDataAsync = async (page?: number): Promise<void> => {
//   setIsLoading(true);
//   const result = await (
//     await fetch(
//       `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page || currentPage
//       }&per_page=${elementsOnPage}&orientation=${orientation}&color=${color}&order_by=${orderBy}`
//     )
//   ).json();
//   const fetchedObjects = result.results.map((el: FetchObject) => ({
//     alt_description: el.alt_description,
//     color: el.color,
//     id: el.id,
//     likes: el.likes,
//     urls: el.urls,
//     user: el.user
//   }));
//   const urls = result.results.map((el: URLs) => el.urls.regular);
//   setFetchingElems(fetchedObjects);
//   setTotalPages(result.total_pages);
//   setIsLoading(false);
// };

// return [[fetchingElems, totalPages], fetchDataAsync];
// };

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
