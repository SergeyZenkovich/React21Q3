import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";
import {HashRouter} from "react-router-dom";
import ImageCard from "../ImageCard";
import App from "../../../App";

const testObject = {
  id: "testId",
  urls: {
    full: "fullTest",
    regular: "regularTest",
    small: "smallTest",
    thumb: "thumbTest"
  }
};

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      {" "}
      <ImageCard {...testObject}></ImageCard>
    </HashRouter>,
    container
  );

  expect(container.querySelector("img").alt).toBe("imageCard");
});

describe("Image Card Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(
      <HashRouter>
        <ImageCard {...testObject}></ImageCard>
      </HashRouter>
    );
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
