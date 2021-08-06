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

const Serach = ({searchData}: {searchData: () => Promise<void>}): JSX.Element => {
  const [orderBy, setOrderBy] = useState("relevant");
  return (
    <StyledSerachBlockWithOptions>
      <StyledSearchBlock>
        <StyledSearchInput placeholder="Iphone X...." />
        <StyledCardButton onClick={searchData}>Search</StyledCardButton>
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
      </StyledoptionsBlock>
    </StyledSerachBlockWithOptions>
  );
};
export default Serach;
