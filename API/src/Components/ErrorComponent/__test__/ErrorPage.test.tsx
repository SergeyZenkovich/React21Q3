import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";
import ErrorBlock from "../ErrorComponent";
import App from "../../../App";

const testString = "Car";

it("renders Error page without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(<ErrorBlock query={testString}></ErrorBlock>, container);

  expect(container.querySelector("h4").textContent).toBe("Sorry no results found for Car");
});
it("renders Error page without query", () => {
  const container = document.createElement("div");
  ReactDOM.render(<ErrorBlock></ErrorBlock>, container);

  expect(container.querySelector("h4").textContent).toBe("Sorry page not found ");
});

describe("AboutPage Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(<ErrorBlock query={testString}></ErrorBlock>);
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
