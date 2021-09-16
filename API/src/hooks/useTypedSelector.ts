import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/combinationsOfReducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
