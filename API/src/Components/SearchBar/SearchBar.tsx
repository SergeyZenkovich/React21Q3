import React, {useState} from "react";
import styled from "styled-components";
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
  setQuery,
  searchData,
  orderBy,
  setOrderBy,
  orient,
  setOrientation,
  color,
  setColor
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchData: (onFirstPage: boolean) => void;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  orient: string;
  setOrientation: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  return (
    <StyledSerachBlockWithOptions>
      <StyledSearchBlock>
        <StyledSearchInput
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Iphone X...."
        />
        <StyledCardButton
          onClick={() => {
            searchData(true);
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
            setOrderBy(e.target.value);
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
            setOrientation(e.target.value);
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
            setColor(e.target.value);
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
