import React from "react";
import styled from "styled-components";
import {StyledErrorBlock} from "./ErrorComponentStyling";

import ErrorImg from "../../assets/img/404error.png";

const ErrorBlock = ({query}: {query: string}): JSX.Element => {
  return (
    <StyledErrorBlock>
      <h4>Sorry no results found for {query}</h4>
      <img src={ErrorImg} alt="no results img" />
    </StyledErrorBlock>
  );
};

export default ErrorBlock;
