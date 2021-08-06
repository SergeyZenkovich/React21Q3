import React from "react";
import styled from "styled-components";

import {StyledSearchBlock, StyledSearchInput, StyledCardButton} from "./SearchBarStyling";

const Serach = ({searchData}: {searchData: () => Promise<void>}): JSX.Element => (
  <StyledSearchBlock>
    <StyledSearchInput placeholder="Iphone X...." />
    <StyledCardButton onClick={searchData}>Search</StyledCardButton>
  </StyledSearchBlock>
);
export default Serach;
