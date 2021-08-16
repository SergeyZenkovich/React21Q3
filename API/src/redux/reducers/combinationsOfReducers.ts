import {combineReducers} from "redux";
import {homePageReducer} from "./homePageReducer";

export const rootReducer = combineReducers({
  home: homePageReducer
});

export type RootState = ReturnType<typeof rootReducer>;
