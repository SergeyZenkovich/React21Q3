import React from "react";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

const StyledAboutPage = styled.div`
  @font-face {
    font-family: "CardTextFontBold";
    src: url(${fontPBold});
  }
  & h3 {
    font-family: "CardTextFontBold";
  }
`;
const AboutPage = (): JSX.Element => {
  return (
    <StyledAboutPage>
      <h3>This is AboutPage</h3>
    </StyledAboutPage>
  );
};

export default AboutPage;
