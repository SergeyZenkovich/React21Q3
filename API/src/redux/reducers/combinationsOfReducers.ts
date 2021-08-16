import {combineReducers} from "redux";
import {detailsPageReducer} from "./detailsPageReducer";
import {homePageReducer} from "./homePageReducer";

export const rootReducer = combineReducers({
  home: homePageReducer,
  details: detailsPageReducer
});

export type RootState = ReturnType<typeof rootReducer>;
