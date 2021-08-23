import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {
  setRequestColorParam,
  setRequestOrderParam,
  setRequestOrientParam,
  setRequestQueryParam
} from "../../redux/ActionCreators/homePageActionCreators";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

import {
  StyledSerachBlockWithOptions,
  StyledSearchBlock,
  StyledoptionsBlock,
  StyledSearchInput,
  StyledCardButton
} from "./SearchBarStyling";

const Serach = ({
  query,
  searchData,
  orderBy,
  orient,
  color
}: {
  query: string;
  searchData: (page: number) => void;
  orderBy: string;
  orient: string;
  color: string;
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <StyledSerachBlockWithOptions>
      <StyledSearchBlock>
        <StyledSearchInput
          value={query}
          onChange={(e) => {
            dispatch(setRequestQueryParam(e.target.value));
          }}
          placeholder="Iphone X...."
        />
        <StyledCardButton
          onClick={() => {
            searchData(1);
          }}
        >
          Search
        </StyledCardButton>
      </StyledSearchBlock>
      <StyledoptionsBlock>
        <select
          name="orderBy"
          id="orderBy"
          value={orderBy}
          onChange={(e) => {
            dispatch(setRequestOrderParam(e.target.value));
          }}
        >
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
        <select
          name="orientation"
          id="orientation"
          value={orient}
          onChange={(e) => {
            dispatch(setRequestOrientParam(e.target.value));
          }}
        >
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
        <select
          name="color"
          id="color"
          value={color}
          onChange={(e) => {
            dispatch(setRequestColorParam(e.target.value));
          }}
        >
          <option value="black_and_white">Black and White</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
          <option value="magenta">Magenta</option>
          <option value="green">Green</option>
          <option value="teal">Teal</option>
          <option value="blue">Blue</option>
        </select>
      </StyledoptionsBlock>
    </StyledSerachBlockWithOptions>
  );
};
export default Serach;
