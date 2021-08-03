import React from "react";
import styled from "styled-components";

import {StyledSearchBlock, StyledSearchInput, StyledCardButton} from "./SearchBarStyling";

const Serach = (): JSX.Element => (
  <StyledSearchBlock>
    <StyledSearchInput placeholder="Iphone X...." />
    <StyledCardButton>Search</StyledCardButton>
  </StyledSearchBlock>
);
export default Serach;
