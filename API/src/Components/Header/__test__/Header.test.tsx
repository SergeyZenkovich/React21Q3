import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import styled from "styled-components";
import "jest-styled-components";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import Header from "../Header";
import App from "../../../App";
import {StyledHeaderBlock, StyledHeaderElement} from "../HeaderStyling";
import store from "../../../redux/store";

const testActivePage = "Home";

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Header activePage={testActivePage} setActivePage={() => {}}></Header>
      </Provider>
    </HashRouter>,
    container
  );
  const innerBlockClassName = StyledHeaderBlock.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`);
  expect(container.contains(innerBlock)).toBeTruthy();
});

test("corectly render header elements with active styles", () => {
  const tree = renderer.create(<StyledHeaderElement activePage={true} />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("text-decoration", "underline");
});
test("corectly render header elements without active styles", () => {
  const tree = renderer.create(<StyledHeaderElement activePage={false} />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("text-decoration", "none");
});

describe("Header Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(
      <HashRouter>
        <Provider store={store}>
          <Header activePage={testActivePage} setActivePage={setFunction}></Header>
        </Provider>
      </HashRouter>
    );
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
