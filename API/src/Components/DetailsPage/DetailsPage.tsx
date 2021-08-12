import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {FetchObject} from "src/interfaces/ComponentsInterfaces";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";
import Card from "../Card/Card";

import {StyledDetailsPage} from "./DetailsPageStyling";

const DetailsPage = ({
  setActivePage,
  pageElements
}: {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  pageElements: FetchObject[];
}): JSX.Element => {
  const {id} = useParams<{id?: string}>();
  const element = pageElements.find((el: FetchObject) => el.id === id);
  useEffect(() => {
    setActivePage("");
  }, []);
  return (
    <StyledDetailsPage>
      <h3>Details Page</h3>
      <Card {...element} />
    </StyledDetailsPage>
  );
};

export default DetailsPage;
