import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {HashRouter} from "react-router-dom";
import Serach from "../../SearchBar/SearchBar";
import {FetchActionsType} from "../../../interfaces/reducersInterfaces";
import {setRequestPageParam} from "../../../redux/ActionCreators/homePageActionCreators";
import App from "../../../App";
import HomePageWithRedux from "../HomePageWithRedux";
import store from "../../../redux/store";
import {StyledCard} from "../../ImageCard/ImageCardStyling";

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
const testElements = [testElement];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const testObject = {
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
const testObjectWithRequest = {
  totalElementsCount: 1,
  elements: testElements,
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
const testNumber = 10;

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <HomePageWithRedux homeState={testObject} setActivePage={() => {}}></HomePageWithRedux>
    </Provider>,
    container
  );
  expect(container.querySelector("input")).toBeTruthy();
});
it("renders without crashing and with image element block", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <HomePageWithRedux
          homeState={testObjectWithRequest}
          setActivePage={() => {}}
        ></HomePageWithRedux>
      </Provider>
    </HashRouter>,
    container
  );
  const innerBlockClassName = StyledCard.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`);
  expect(container.contains(innerBlock)).toBeTruthy();
  expect(container.querySelector("input")).toBeTruthy();
});

describe("HomePage Component", () => {
  const setFunction = jest.fn();
  let container;

  beforeEach(() => {
    container = renderer.create(
      <Provider store={store}>
        <HomePageWithRedux homeState={testObject} setActivePage={setFunction}></HomePageWithRedux>
      </Provider>
    );
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("useEffect Fires Once", () => {
    expect(setFunction).toBeCalledTimes(1);
  });
});
