import React from "react";
import ReactDOM from "react-dom";
import Preloader from "../Preloader";

it("renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Preloader></Preloader>, container);

  expect(container.querySelector("img").alt).toBe("gifLoader");
});
