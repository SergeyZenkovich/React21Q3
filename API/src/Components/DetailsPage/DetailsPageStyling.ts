import React from "react";
import styled from "styled-components";

import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

export const StyledDetailsPage = styled.div`
  @font-face {
    font-family: "CardTextFontBold";
    src: url(${fontPBold});
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  & h3 {
    font-family: "CardTextFontBold";
    text-align: center;
  }
`;
