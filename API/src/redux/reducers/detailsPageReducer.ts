import {
  DetailsFetchingActions,
  DetailsPageStateInterface,
  FetchActionsTypeDetails
} from "../../interfaces/reducersInterfaces";

const initialState: DetailsPageStateInterface = {
  isLoading: false,
  element: {
    id: "",
    color: "",
    alt_description: "",
    likes: 0,
    urls: {
      full: "",
      regular: "",
      thumb: "",
      small: ""
    },
    user: {
      first_name: "",
      last_name: "",
      location: "",
      username: "",
      twitter_username: "",
      instagram_username: "",
      total_photos: 0,
      total_likes: 0
    }
  }
};

export const detailsPageReducer = (
  state: DetailsPageStateInterface = initialState,
  action: DetailsFetchingActions
): DetailsPageStateInterface => {
  switch (action.type) {
    case FetchActionsTypeDetails.TOGGLE_FETCHING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case FetchActionsTypeDetails.SET_ELEMENT:
      return {
        ...state,
        element: action.element
      };
    default:
      return state;
  }
};
