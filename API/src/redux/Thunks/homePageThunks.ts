import {getData} from "src/DAL/API";
import {Dispatch} from "redux";
import {FetchActions} from "src/interfaces/reducersInterfaces";
import {setElements, setTotalCount, toggleFetching} from "../ActionCreators/homePageActionCreators";
import {QueryParametersInterface} from "../../interfaces/ComponentsInterfaces";

export const getFetchedDataThunkCreator =
  (params: QueryParametersInterface) =>
  async (dispatch: Dispatch<FetchActions>): Promise<void> => {
    dispatch(toggleFetching());
    const responseData = await getData(params);
    dispatch(setTotalCount(responseData.totalCount));
    dispatch(setElements(responseData.elements));
    dispatch(toggleFetching());
  };
