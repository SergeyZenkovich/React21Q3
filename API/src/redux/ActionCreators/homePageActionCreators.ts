import {FetchObject} from "src/interfaces/ComponentsInterfaces";
import {
  FetchActionsType,
  LoadingAction,
  SetElementsAction,
  SetTotalCountAction
} from "src/interfaces/reducersInterfaces";

export const toggleFetching = (): LoadingAction => ({
  type: FetchActionsType.TOGGLE_FETCHING
});
export const setElements = (elements: FetchObject[]): SetElementsAction => ({
  type: FetchActionsType.SET_ELEMENTS,
  elements
});
export const setTotalCount = (totalCount: number): SetTotalCountAction => ({
  type: FetchActionsType.SET_TOTAL_COUNT,
  totalCount
});
