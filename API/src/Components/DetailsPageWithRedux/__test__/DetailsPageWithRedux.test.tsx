import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";
import App from "../../../App";
import DetailsPageWithRedux from "../DetailsPageWithRedux";

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

jest.mock("react-router-dom", () => {
  return {
    ...(jest.requireActual("react-router-dom") as Record<string, unknown>), // use actual for all non-hook parts
    useParams: () => ({
      id: "img1"
    }),
    useRouteMatch: () => ({url: "/company/company-id1/team/team-id1"})
  };
});

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <DetailsPageWithRedux
      detailsState={testObject}
      setActivePage={() => {}}
    ></DetailsPageWithRedux>,
    container
  );

  expect(container.querySelector("h3").textContent).toBe("Details Page");
});

describe("DetailsPage Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(
      <DetailsPageWithRedux
        detailsState={testObject}
        setActivePage={setFunction}
      ></DetailsPageWithRedux>
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
