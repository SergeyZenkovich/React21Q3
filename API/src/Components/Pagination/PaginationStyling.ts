import React from "react";
import styled from "styled-components";

import fontP from "../../assets/fonts/MavenPro-Regular.ttf";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

export const StyledPaginationBlock = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
`;
export const StyledPaginatonPage = styled.button`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  @font-face {
    font-family: "CardTextFontBold";
    src: url(${fontPBold});
  }
  padding: 0 1px;
  margin: 0 1px;
  width: 32px;
  height: 25px;
  border: 1px solid #000;
  border-radius: 2px;
  background-color: transparent;
  font-size: 15px;
  color: ${({current}: {current: boolean}) => (current ? `#0699e2` : `#000`)};
  font-family: ${({current}: {current: boolean}) =>
    current ? `CardTextFontBold` : `CardTextFont`};
`;
export const StyledPaginatonPageHandler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 28px;
  height: 25px;
  & img {
    width: 13px;
    height: 11px;
  }
`;
