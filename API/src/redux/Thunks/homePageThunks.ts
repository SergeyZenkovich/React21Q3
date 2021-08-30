import {Dispatch} from "redux";
import {FetchActions} from "src/interfaces/reducersInterfaces";
import {getData} from "../../DAL/API";
import {setElements, setTotalCount, toggleFetching} from "../ActionCreators/homePageActionCreators";
import {QueryParametersInterface} from "../../interfaces/ComponentsInterfaces";

export const getFetchedDataThunkCreator =
  (params: QueryParametersInterface) =>
  async (dispatch: Dispatch<FetchActions>): Promise<void> => {
    dispatch(toggleFetching());
    const responseData = await getData(params);
    dispatch(setTotalCount(responseData.total_pages));
    dispatch(setElements(responseData.results));
    dispatch(toggleFetching());
  };
