import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import {Provider, useDispatch, useSelector} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  LoadingActionCreator,
  SetDetailsElementActionCreator
} from "../../../redux/ActionCreators/deatailsPageActionCreators";
import {getDataByIDThunkCreator} from "../../../redux/Thunks/detailsPageThunks";
import App from "../../../App";
import DetailsPageWithRedux from "../DetailsPageWithRedux";
import store from "../../../redux/store";

const testObject = {
  isLoading: false,
  element: {
    id: "testString",
    color: "#fff",
    alt_description: "test description",
    likes: 0,
    urls: {
      full: "fullTest",
      regular: "regularTest",
      small: "smallTest",
      thumb: "thumbTest"
    },
    user: {
      first_name: "testName",
      last_name: "testSurname",
      location: "testLocation",
      username: "testUserName",
      twitter_username: "testTwitter",
      instagram_username: "testIntagram",
      total_photos: 1,
      total_likes: 10
    }
  }
};
const testElement = {
  id: "testString",
  color: "#fff",
  alt_description: "test description",
  likes: 0,
  urls: {
    full: "fullTest",
    regular: "regularTest",
    small: "smallTest",
    thumb: "thumbTest"
  },
  user: {
    first_name: "testName",
    last_name: "testSurname",
    location: "testLocation",
    username: "testUserName",
    twitter_username: "testTwitter",
    instagram_username: "testIntagram",
    total_photos: 1,
    total_likes: 10
  }
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("react-router-dom", () => {
  return {
    ...(jest.requireActual("react-router-dom") as Record<string, unknown>),
    useParams: () => ({
      id: "img1"
    }),
    useRouteMatch: () => ({url: "/company/company-id1/team/team-id1"})
  };
});

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <DetailsPageWithRedux detailsState={testObject}></DetailsPageWithRedux>
    </Provider>,
    container
  );
  expect(container.querySelector("h3").textContent).toBe("Details Page");
});

describe("DetailsPage Component", () => {
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <DetailsPageWithRedux detailsState={testObject}></DetailsPageWithRedux>
      </Provider>
    );
  });
  it("dispatch correct action", () => {
    const initialState = {};
    const storeM = mockStore(initialState);
    storeM.dispatch(getDataByIDThunkCreator("xxx")).then(() => {
      const actions = storeM.getActions();
      expect(actions[0]).toEqual(LoadingActionCreator());
    });
  });
});
