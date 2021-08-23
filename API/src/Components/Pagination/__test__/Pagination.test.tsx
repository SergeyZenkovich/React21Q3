import React, {useState} from "react";
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";
import Pagination from "../Pagination";
import App from "../../../App";
import {StyledPaginatonPage} from "../PaginationStyling";

const testObject = {
  totalItemsCount: 100,
  currentPage: 15,
  portionSize: 10,
  setFetchElems: jest.fn()
};

it("Pagination renders without crashing", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Pagination {...testObject}></Pagination>, container);

  expect(container.querySelector("img").alt).toBe("previous image");
});

describe("Pagination Component", () => {
  // let container;
  // beforeEach(() => {
  //   container = renderer.create(<Pagination {...testObject}></Pagination>);
  // });
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it("matches shapshot", () => {
    act(() => {
      ReactDOM.render(<Pagination {...testObject}></Pagination>, container);
    });
    // const innerBlockClassName = StyledPaginatonPage.styledComponentId;
    // const innerBlock = container.querySelector(`.${innerBlockClassName}`) as HTMLButtonElement;
    // fireEvent(innerBlock, new MouseEvent("click", {bubbles: true, cancelable: true}));
    expect(testObject.setFetchElems).toBeCalledTimes(0);
    // const tree = container.toJSON();
    // expect(tree).toMatchSnapshot();
    // expect(testObject.setFetchElems).toBeCalledTimes(1);
  });
  // it("first func", () => {
  //   let tree = container.toJSON();
  //   expect(tree).toMatchSnapshot();

  //   tree.props.prevPortion();
  //   tree = container.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   expect(tree.props.portionNumber).toEqual(1);

  //   tree.props.nextPortion();
  //   tree = container.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   expect(tree.props.portionNumber).toEqual(2);

  //   tree.props.firstPortion();
  //   tree = container.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   expect(tree.props.portionNumber).toEqual(3);
  // });
  // it("useEffect fires ones", () => {
  //   const tree = container.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   expect(testObject.setFetchElems).toBeCalledTimes(1);
  // });
});
