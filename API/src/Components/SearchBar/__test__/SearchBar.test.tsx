import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import styled from "styled-components";
import "jest-styled-components";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Search from "../SearchBar";
import {StyledSearchInput} from "../SearchBarStyling";
import store from "../../../redux/store";
import {
  setRequestOrderParam,
  setRequestQueryParam
} from "../../../redux/ActionCreators/homePageActionCreators";
import {FetchActionsType} from "../../../interfaces/reducersInterfaces";

const middlewares = [];
const mockStore = configureStore(middlewares);

const testObj = {
  query: "testQuery",
  searchData: jest.fn(),
  orderBy: "relevant",
  orient: "landscape",
  color: "blue"
};

it("renders img correctly", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Search {...testObj}></Search>
    </Provider>,
    container
  );

  expect(container.querySelector("input")).toBeTruthy();
});
it("renders input with query correctly", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Search {...testObj}></Search>
    </Provider>,
    container
  );
  const innerBlockClassName = StyledSearchInput.styledComponentId;
  const innerBlock = container.querySelector(`.${innerBlockClassName}`) as HTMLInputElement;
  expect(innerBlock.value).toEqual(testObj.query);
});
it("renders select with value correctly", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Search {...testObj}></Search>
    </Provider>,
    container
  );
  const OrderSelectElement = container.querySelector(`select[id="orderBy"]`) as HTMLSelectElement;
  const OrientSelectElement = container.querySelector(
    `select[id="orientation"]`
  ) as HTMLSelectElement;
  const ColorSelectElement = container.querySelector(`select[id="color"]`) as HTMLSelectElement;
  expect(OrderSelectElement.value).toEqual(testObj.orderBy);
  expect(OrientSelectElement.value).toEqual(testObj.orient);
  expect(ColorSelectElement.value).toEqual(testObj.color);
});

describe("SearchBar Component", () => {
  const setFunction = jest.fn();
  let container;
  beforeEach(() => {
    container = renderer.create(
      <Provider store={store}>
        <Search {...testObj}></Search>
      </Provider>
    );
  });
  it("dispacth correctly", () => {
    const initialState = {};
    const storeM = mockStore(initialState);
    storeM.dispatch(setRequestQueryParam("test"));
    const actions = storeM.getActions();
    const expectedPayload = {
      type: FetchActionsType.SET_QUERY_PARAM,
      query: "test"
    };
    expect(actions).toEqual([expectedPayload]);
  });
  it("dispacth correctly", () => {
    const initialState = {};
    const storeM = mockStore(initialState);
    storeM.dispatch(setRequestOrderParam("latest"));
    const actions = storeM.getActions();
    const expectedPayload = {
      type: FetchActionsType.SET_OREDER_BY_PARAM,
      orderBy: "latest"
    };
    expect(actions).toEqual([expectedPayload]);
  });
  it("matches shapshot", () => {
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
