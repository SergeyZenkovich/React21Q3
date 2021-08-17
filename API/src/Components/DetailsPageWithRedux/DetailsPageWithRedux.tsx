import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import styled from "styled-components";

import {DetailsPageStateInterface} from "src/interfaces/reducersInterfaces";
import {StyledDetailsPage} from "../DetailsPage/DetailsPageStyling";
import Card from "../Card/Card";
import {useActions} from "../../hooks/useActions";

const DetailsPageWithRedux = ({
  detailsState,
  setActivePage
}: {
  detailsState: DetailsPageStateInterface;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  const {id} = useParams<{id?: string}>();
  const {getDataByIDThunkCreator} = useActions();
  useEffect(() => {
    getDataByIDThunkCreator(id);
    setActivePage("");
  }, []);
  return (
    <StyledDetailsPage
      as={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h3>Details Page</h3>
      <Card {...detailsState} />
    </StyledDetailsPage>
  );
};

export default DetailsPageWithRedux;
