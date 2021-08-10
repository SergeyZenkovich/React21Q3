import React, {useEffect} from "react";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

import {StyledAboutPage} from "./AboutPageStyling";

const AboutPage = ({
  setActivePage
}: {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  useEffect(() => {
    setActivePage("About");
  }, []);
  return (
    <StyledAboutPage>
      <h3>This is AboutPage</h3>
    </StyledAboutPage>
  );
};

export default AboutPage;
