import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import {getDataByIDThunkCreator} from "../redux/Thunks/detailsPageThunks";
import {getFetchedDataThunkCreator} from "../redux/Thunks/homePageThunks";
import {
  setRequestPageParam,
  setRequestQueryParam,
  setRequestOrientParam,
  setRequestOrderParam,
  setRequestColorParam,
  setRequestElementsOnPage
} from "../redux/ActionCreators/homePageActionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      getFetchedDataThunkCreator,
      setRequestPageParam,
      setRequestElementsOnPage,
      setRequestQueryParam,
      setRequestOrientParam,
      setRequestOrderParam,
      setRequestColorParam,
      getDataByIDThunkCreator
    },
    dispatch
  );
};
