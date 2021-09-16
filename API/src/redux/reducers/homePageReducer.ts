import {
  FetchActions,
  FetchActionsType,
  HomePageStateInterface
} from "src/interfaces/reducersInterfaces";

const initialState: HomePageStateInterface = {
  totalElementsCount: -1,
  elements: [],
  isFetching: false,
  requestParams: {
    query: "",
    orderBy: "latest",
    orient: "landscape",
    color: "blue",
    page: 1,
    elementsOnPage: 10
  }
};

export const homePageReducer = (
  state: HomePageStateInterface = initialState,
  action: FetchActions
): HomePageStateInterface => {
  switch (action.type) {
    case FetchActionsType.TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case FetchActionsType.SET_ELEMENTS:
      return {
        ...state,
        elements: action.elements
      };
    case FetchActionsType.SET_TOTAL_COUNT:
      return {
        ...state,
        totalElementsCount: action.totalCount
      };
    case FetchActionsType.SET_PAGE_PARAM:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          page: action.page
        }
      };
    case FetchActionsType.SET_QUERY_PARAM:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          query: action.query
        }
      };
    case FetchActionsType.SET_OREDER_BY_PARAM:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          orderBy: action.orderBy
        }
      };
    case FetchActionsType.SET_ORIENT_PARAM:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          orient: action.orient
        }
      };
    case FetchActionsType.SET_COLOR_PARAM:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          color: action.color
        }
      };
    case FetchActionsType.SET_ELEMENTS_ON_PAGE_PARAM:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          elementsOnPage: action.elementsOnPage
        }
      };
    default:
      return state;
  }
};
