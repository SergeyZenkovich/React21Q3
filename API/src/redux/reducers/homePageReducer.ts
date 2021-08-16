import {
  FetchActions,
  FetchActionsType,
  HomePageStateInterface
} from "src/interfaces/reducersInterfaces";
import {FetchObject} from "../../interfaces/ComponentsInterfaces";

const initialState: HomePageStateInterface = {
  totalElementsCount: 0,
  elements: [],
  isFetching: false
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
    default:
      return state;
  }
};

const toggleFetchingActionCreator = () => ({type: FetchActionsType.TOGGLE_FETCHING});
const setElements = (elements: FetchObject[]) => ({type: FetchActionsType.SET_ELEMENTS, elements});
const setTotalCount = (totalCount: number) => ({
  type: FetchActionsType.SET_TOTAL_COUNT,
  totalCount
});
