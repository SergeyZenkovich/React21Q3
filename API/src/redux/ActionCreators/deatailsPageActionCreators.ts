import {FetchObject} from "src/interfaces/ComponentsInterfaces";
import {
  FetchActionsTypeDetails,
  LoadingDetailsAction,
  SetDetailsElementAction
} from "../../interfaces/reducersInterfaces";

export const LoadingActionCreator = (): LoadingDetailsAction => ({
  type: FetchActionsTypeDetails.TOGGLE_FETCHING
});
export const SetDetailsElementActionCreator = (element: FetchObject): SetDetailsElementAction => ({
  type: FetchActionsTypeDetails.SET_ELEMENT,
  element
});
