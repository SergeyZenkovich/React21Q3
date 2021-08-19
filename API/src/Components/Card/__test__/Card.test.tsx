import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import styled from "styled-components";
import {act} from "react-dom/test-utils";
import PreloaderForCard from "src/Components/PreloaderForCard/PreloaderForCard";
import App from "../../../App";
import Card from "../Card";
import {StyledParametersBlock, StyledSeparatorBlock, StyledCardMiniImg} from "../CardsStyling";

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
const testObjectWrong = {
  isLoading: false,
  element: {
    id: null,
    color: null,
    alt_description: null,
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
      total_likes: NaN
    }
  }
};
const testObjectWrong2 = {
  isLoading: false,
  element: {
    id: "testId",
    color: null,
    alt_description: null,
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
      location: "",
      username: "",
      twitter_username: "",
      instagram_username: "",
      total_photos: NaN,
      total_likes: NaN
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

it("not renders inner styledComponentns div on id null", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong}></Card>, container);
  const innerBlockClassName = StyledParametersBlock.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`);
  expect(container.contains(innerBlock)).toBeFalsy();
});

it("renders inner styledComponentns div with description", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.descriptionBlock`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("not renders inner styledComponentns div with description on wrong description", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlock = container.querySelector(`.descriptionBlock`);
  expect(container.contains(innerBlock)).toBeFalsy();
});
it("renders inner styledComponentns div with username", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.userNameBlock`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("not renders inner styledComponentns div with username on wrong username", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlock = container.querySelector(`.userNameBlock`);
  expect(container.contains(innerBlock)).toBeFalsy();
});

it("renders inner styledComponentns div with user Location", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.userLocationBlock`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("not renders inner styledComponentns div with user Location on wrong user Location", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlock = container.querySelector(`.userLocationBlock`);
  expect(container.contains(innerBlock)).toBeFalsy();
});

it("renders inner styledComponentns div with user twitter", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.twitterBlock`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("not renders inner styledComponentns div with user twitter on wrong user twitter", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlock = container.querySelector(`.twitterBlock`);
  expect(container.contains(innerBlock)).toBeFalsy();
});
it("renders inner styledComponentns div with user instagram", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.intagramBlock`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("not renders inner styledComponentns div with user instagram on wrong user instagram", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlock = container.querySelector(`.intagramBlock`);
  expect(container.contains(innerBlock)).toBeFalsy();
});

it("renders inner styledComponentns div with user total photos", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.totalPhotosBlock`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

it("not renders inner styledComponentns div with user total photos on wrong user total photos", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlock = container.querySelector(`.totalPhotosBlock`);
  expect(container.contains(innerBlock)).toBeFalsy();
});

it("renders inner styledComponentns div with usersTotalLikes", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObject}></Card>, container);
  const innerBlock = container.querySelector(`.totalBlock`);
  expect(container.querySelector(`.totalBlock span`).textContent).toBe("10");
});

it("not renders inner styledComponentns div with usersTotalLikes on wrong usersTotalLikes", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Card {...testObjectWrong2}></Card>, container);
  const innerBlockClassName = StyledParametersBlock.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`);
  const innerBlock2 = innerBlock.querySelector(`.totalBlock`);
  expect(container.contains(innerBlock2)).toBeFalsy();
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
