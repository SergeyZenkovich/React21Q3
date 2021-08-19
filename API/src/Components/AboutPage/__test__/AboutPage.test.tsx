import React, {useState} from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";
import AboutPage from "../AboutPage";
import App from "../../../App";

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(<AboutPage setActivePage={() => {}}></AboutPage>, container);

  expect(container.querySelector("h3").textContent).toBe("This is AboutPage");
});

describe("AboutPage Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(<AboutPage setActivePage={setFunction}></AboutPage>);
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("useEffect Fires Once", () => {
    expect(setFunction).toBeCalledTimes(1);
  });
});
