import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import styled from "styled-components";
import {act} from "react-dom/test-utils";
import PreloaderForCard from "src/Components/PreloaderForCard/PreloaderForCard";
import App from "../../../App";
import Card from "../Card";
import {StyledParametersBlock} from "../CardsStyling";

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
      total_likes: 1
    }
  }
};
const testObject2 = {
  isLoading: true,
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
      total_likes: 1
    }
  }
};

it("renders img inside Card block without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  expect(container.querySelector("img").src).toBe(
    `http://localhost/${testObject.element.urls.regular}`
  );
});

it("renders inner styledComponentns div", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlockClassName = StyledParametersBlock.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("render preloader if loading", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject2}></Card>, container);
  expect(container.querySelector("img").alt).toBe(`gifLoader`);
});

describe("Card Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(<Card {...testObject}></Card>);
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
