import React from "react";
import {
  toggleFetching,
  setElements,
  setTotalCount,
  setRequestPageParam,
  setRequestQueryParam,
  setRequestOrientParam,
  setRequestOrderParam,
  setRequestColorParam,
  setRequestElementsOnPage
} from "../../ActionCreators/homePageActionCreators";
import {
  DetailsPageStateInterface,
  FetchActionsTypeDetails,
  HomePageStateInterface
} from "../../../interfaces/reducersInterfaces";
import {
  LoadingActionCreator,
  SetDetailsElementActionCreator
} from "../../ActionCreators/deatailsPageActionCreators";
import {detailsPageReducer} from "../detailsPageReducer";
import {homePageReducer} from "../homePageReducer";

const initialStateDetails: DetailsPageStateInterface = {
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
const initialStateHome: HomePageStateInterface = {
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

it("details reducer work first action", () => {
  const newState = detailsPageReducer(initialStateDetails, LoadingActionCreator());
  expect(newState.isLoading).toBeTruthy();
});
it("details reducer work first action", () => {
  const newState = detailsPageReducer(
    initialStateDetails,
    SetDetailsElementActionCreator(testElement)
  );
  expect(newState.element).toEqual(testElement);
});

it("home page reducer work fetching action", () => {
  const newState = homePageReducer(initialStateHome, toggleFetching());
  expect(newState.isFetching).toBeTruthy();
});
it("home page reducer work set elements action", () => {
  const newState = homePageReducer(initialStateHome, setElements(testElements));
  expect(newState.elements).toEqual(testElements);
});
it("home page reducer work set total count action", () => {
  const newState = homePageReducer(initialStateHome, setTotalCount(5));
  expect(newState.totalElementsCount).toEqual(5);
});
it("home page reducer work set requested page action", () => {
  const newState = homePageReducer(initialStateHome, setRequestPageParam(10));
  expect(newState.requestParams.page).toEqual(10);
});
it("home page reducer work set query action", () => {
  const newState = homePageReducer(initialStateHome, setRequestQueryParam("Car"));
  expect(newState.requestParams.query).toEqual("Car");
});
it("home page reducer work set requested orientatino action", () => {
  const newState = homePageReducer(initialStateHome, setRequestOrientParam("portrait"));
  expect(newState.requestParams.orient).toEqual("portrait");
});
it("home page reducer work set requested order action", () => {
  const newState = homePageReducer(initialStateHome, setRequestOrderParam("liked"));
  expect(newState.requestParams.orderBy).toEqual("liked");
});
it("home page reducer work set requested color action", () => {
  const newState = homePageReducer(initialStateHome, setRequestColorParam("red"));
  expect(newState.requestParams.color).toEqual("red");
});
it("home page reducer work set requested elements on page action", () => {
  const newState = homePageReducer(initialStateHome, setRequestElementsOnPage(200));
  expect(newState.requestParams.elementsOnPage).toEqual(200);
});
