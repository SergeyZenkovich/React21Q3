import {FetchObject} from "./ComponentsInterfaces";

export interface HomePageStateInterface {
  totalElementsCount: number;
  elements: FetchObject[];
  isFetching: boolean;
}

export enum FetchActionsType {
  TOGGLE_FETCHING = "TOGGLE-LOADING",
  SET_TOTAL_COUNT = "SET-TOTAL-COUNT",
  SET_ELEMENTS = "SET-ELEMENTS"
}

export interface LoadingAction {
  type: FetchActionsType.TOGGLE_FETCHING;
}
export interface SetTotalCountAction {
  type: FetchActionsType.SET_TOTAL_COUNT;
  totalCount: number;
}
export interface SetElementsAction {
  type: FetchActionsType.SET_ELEMENTS;
  elements: FetchObject[];
}

export type FetchActions = LoadingAction | SetTotalCountAction | SetElementsAction;
