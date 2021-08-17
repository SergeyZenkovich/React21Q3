import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {
  setRequestPageParam,
  setRequestQueryParam,
  setRequestOrientParam,
  setRequestOrderParam,
  setRequestColorParam,
  setRequestElementsOnPage
} from "src/redux/ActionCreators/homePageActionCreators";
import {getDataByIDThunkCreator} from "src/redux/Thunks/detailsPageThunks";
import {getFetchedDataThunkCreator} from "src/redux/Thunks/homePageThunks";

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
