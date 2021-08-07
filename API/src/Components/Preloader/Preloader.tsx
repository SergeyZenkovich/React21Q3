import React from "react";
import styled from "styled-components";

import loaderImage from "../../assets/img/loader.gif";

const StyledPreloaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

const Preloader = (): JSX.Element => {
  return (
    <StyledPreloaderBlock>
      <img src={loaderImage} alt="gifLoader" />
    </StyledPreloaderBlock>
  );
};

export default Preloader;
