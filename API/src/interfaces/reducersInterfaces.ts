import {FetchedURLS, FetchedUser, FetchObject} from "./ComponentsInterfaces";

/// home page reducer

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
