import React from "react";
import styled from "styled-components";

import loaderImage from "../../assets/img/circles.gif";
import {StyledPreloaderBlock} from "./PreloaderForCardStyling";

const PreloaderForCard = (): JSX.Element => {
  return (
    <StyledPreloaderBlock>
      <img src={loaderImage} alt="gifLoader" />
    </StyledPreloaderBlock>
  );
};

export default PreloaderForCard;
