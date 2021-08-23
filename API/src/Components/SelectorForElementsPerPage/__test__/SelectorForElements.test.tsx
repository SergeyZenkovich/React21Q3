import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import styled from "styled-components";
import "jest-styled-components";
import {Provider} from "react-redux";
import Selector from "../SelectorForElementsPerPage";
import store from "../../../redux/store";

const testObj = {
  elementsOnPage: 10
};

it("renders Selector correctly", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Selector {...testObj}></Selector>
    </Provider>,
    container
  );

  expect(container.querySelector("h5").textContent).toBe("Elemetns per page:");
});

describe("Selector Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(
      <Provider store={store}>
        <Selector {...testObj}></Selector>
      </Provider>
    );
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
