import {
  FetchedURLS,
  FetchedUser,
  FetchObject,
  QueryParametersInterface
} from "./ComponentsInterfaces";

/// home page reducer

export interface HomePageStateInterface {
  totalElementsCount: number;
  elements: FetchObject[];
  isFetching: boolean;
  requestParams: QueryParametersInterface;
}

export enum FetchActionsType {
  TOGGLE_FETCHING = "TOGGLE-LOADING",
  SET_TOTAL_COUNT = "SET-TOTAL-COUNT",
  SET_ELEMENTS = "SET-ELEMENTS",
  SET_PAGE_PARAM = "SET-PAGE-PARAM",
  SET_QUERY_PARAM = "SET-QUERY-PARAM",
  SET_ORIENT_PARAM = "SET-ORIENT-PARAM",
  SET_COLOR_PARAM = "SET-COLOR-PARAM",
  SET_OREDER_BY_PARAM = "SET-ORDER-BY-PARAM",
  SET_ELEMENTS_ON_PAGE_PARAM = "SET-ELEMENTS-ON-PAGE-PARAM",
  SET_PARAMS = "SET-PARAMS"
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
export interface SetPageParamAction {
  type: FetchActionsType.SET_PAGE_PARAM;
  page: number;
}
export interface SetQueryParamAction {
  type: FetchActionsType.SET_QUERY_PARAM;
  query: string;
}
export interface SetOrientParamAction {
  type: FetchActionsType.SET_ORIENT_PARAM;
  orient: string;
}
export interface SetColorParamAction {
  type: FetchActionsType.SET_COLOR_PARAM;
  color: string;
}
export interface SetOrderByParamAction {
  type: FetchActionsType.SET_OREDER_BY_PARAM;
  orderBy: string;
}
export interface SetElementsOnPageParamAction {
  type: FetchActionsType.SET_ELEMENTS_ON_PAGE_PARAM;
  elementsOnPage: number;
}
export interface SetParamsAction {
  type: FetchActionsType.SET_PARAMS;
  params: QueryParametersInterface;
}

export type FetchActions =
  | LoadingAction
  | SetTotalCountAction
  | SetElementsAction
  | SetParamsAction
  | SetPageParamAction
  | SetQueryParamAction
  | SetOrientParamAction
  | SetColorParamAction
  | SetOrderByParamAction
  | SetElementsOnPageParamAction;

/// details page reducer

export interface DetailsPageStateInterface {
  isLoading: boolean;
  element: {
    id: string;
    color: string;
    alt_description: string;
    likes: number;
    urls: FetchedURLS;
    user: FetchedUser;
  };
}

export enum FetchActionsTypeDetails {
  TOGGLE_FETCHING = "TOGGLE-LOADING",
  SET_ELEMENT = "SET-ELEMENT"
}

export interface SetDetailsElementAction {
  type: FetchActionsTypeDetails.SET_ELEMENT;
  element: FetchObject;
}
export interface LoadingDetailsAction {
  type: FetchActionsTypeDetails.TOGGLE_FETCHING;
}

export type DetailsFetchingActions = SetDetailsElementAction | LoadingDetailsAction;
