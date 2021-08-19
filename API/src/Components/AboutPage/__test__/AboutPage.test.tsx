import React from "react";
import ReactDOM from "react-dom";
import {act} from 'react-dom/test-utils';
import AboutPage from "../AboutPage";

it("renders without crashing", () => {
  const container = document.createElement("div");
act(()=>{
  ReactDOM.render(<AboutPage setActivePage={() => {}}></AboutPage>, container);
});
  const header = container.querySelector("h3");
  expect(header.textContent).toBe("This is AboutPag");
});
