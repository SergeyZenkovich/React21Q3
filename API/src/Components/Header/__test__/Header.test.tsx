import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";
import Header from "../Header";
import App from "../../../App";
import {StyledHeaderBlock} from "../HeaderStyling";

const testActivePage = "Home";

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Header activePage={testActivePage} setActivePage={() => {}}></Header>,
    container
  );
  const innerBlockClassName = StyledHeaderBlock.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

describe("Header Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(
      <Header activePage={testActivePage} setActivePage={setFunction}></Header>
    );
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
