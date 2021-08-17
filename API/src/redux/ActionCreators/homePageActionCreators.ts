import {FetchObject, QueryParametersInterface} from "src/interfaces/ComponentsInterfaces";
import {
  FetchActionsType,
  LoadingAction,
  SetColorParamAction,
  SetElementsAction,
  SetElementsOnPageParamAction,
  SetOrderByParamAction,
  SetOrientParamAction,
  SetPageParamAction,
  SetQueryParamAction,
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
export const setRequestPageParam = (page: number): SetPageParamAction => ({
  type: FetchActionsType.SET_PAGE_PARAM,
  page
});
export const setRequestQueryParam = (query: string): SetQueryParamAction => ({
  type: FetchActionsType.SET_QUERY_PARAM,
  query
});
export const setRequestOrientParam = (orient: string): SetOrientParamAction => ({
  type: FetchActionsType.SET_ORIENT_PARAM,
  orient
});
export const setRequestOrderParam = (orderBy: string): SetOrderByParamAction => ({
  type: FetchActionsType.SET_OREDER_BY_PARAM,
  orderBy
});
export const setRequestColorParam = (color: string): SetColorParamAction => ({
  type: FetchActionsType.SET_COLOR_PARAM,
  color
});
export const setRequestElementsOnPage = (elementsOnPage: number): SetElementsOnPageParamAction => ({
  type: FetchActionsType.SET_ELEMENTS_ON_PAGE_PARAM,
  elementsOnPage
});
