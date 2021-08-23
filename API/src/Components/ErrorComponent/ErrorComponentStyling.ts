import React from "react";
import styled from "styled-components";

import fontP from "../../assets/fonts/MavenPro-Regular.ttf";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

export const StyledErrorBlock = styled.div`
  @font-face {
    font-family: "CardTextFontBold";
    src: url(${fontPBold});
  }
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & h4 {
    font-family: "CardTextFontBold";
  }
  & img {
    width: 50%;
  }
`;
