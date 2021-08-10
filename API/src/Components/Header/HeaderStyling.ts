import React from "react";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

export const StyledHeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
  background-color: #000a;
  margin-bottom: 10px;
  padding: 0;
`;
export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
`;
export const StyledHeaderElement = styled.div`
  @font-face {
    font-family: "CardTextFontBold";
    src: url(${fontPBold});
  }
  width: 100px;
  margin: 0 10px;
  color: #fff;
  font-family: "CardTextFontBold";
`;
