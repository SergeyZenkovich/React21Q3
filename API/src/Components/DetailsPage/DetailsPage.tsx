import React, {useEffect} from "react";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";
import Card from "../Card/Card";

import {StyledDetailsPage} from "./DetailsPageStyling";

const DetailsPage = ({
  setActivePage
}: {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  useEffect(() => {
    setActivePage("");
  }, []);
  return (
    <StyledDetailsPage>
      <h3>Details Page</h3>
      <Card />
    </StyledDetailsPage>
  );
};

export default DetailsPage;
