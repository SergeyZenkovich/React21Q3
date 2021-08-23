import React from "react";
import ReactDOM from "react-dom";
import PreloaderForCard from "../PreloaderForCard";

it("renders img correctly", () => {
  const container = document.createElement("div");
  ReactDOM.render(<PreloaderForCard></PreloaderForCard>, container);

  expect(container.querySelector("img").alt).toBe("gifLoader");
});
