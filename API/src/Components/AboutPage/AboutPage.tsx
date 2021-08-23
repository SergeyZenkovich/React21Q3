import React, {useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";

import {StyledAboutPage} from "./AboutPageStyling";
import aboutImg from "../../assets/img/info.png";

const AboutPage = ({
  setActivePage
}: {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  useEffect(() => {
    setActivePage("About");
  }, [setActivePage]);
  return (
    <StyledAboutPage
      as={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h3>This is AboutPage</h3>
      <img src={aboutImg} alt="" />
    </StyledAboutPage>
  );
};

export default AboutPage;
