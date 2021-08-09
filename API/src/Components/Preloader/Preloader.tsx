import React from "react";
import styled from "styled-components";

import loaderImage from "../../assets/img/loader.gif";
import {StyledPreloaderBlock} from "./PreloaderStyling";

const Preloader = (): JSX.Element => {
  return (
    <StyledPreloaderBlock>
      <img src={loaderImage} alt="gifLoader" />
    </StyledPreloaderBlock>
  );
};

export default Preloader;
