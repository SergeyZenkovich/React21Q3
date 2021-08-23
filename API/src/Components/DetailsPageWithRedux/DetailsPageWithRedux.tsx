import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import styled from "styled-components";

import {useDispatch} from "react-redux";
import {getDataByIDThunkCreator} from "../../redux/Thunks/detailsPageThunks";
import {DetailsPageStateInterface} from "../../interfaces/reducersInterfaces";
import {StyledDetailsPage} from "../DetailsPage/DetailsPageStyling";
import Card from "../Card/Card";

const DetailsPageWithRedux = ({
  detailsState
}: {
  detailsState: DetailsPageStateInterface;
}): JSX.Element => {
  const {id} = useParams<{id?: string}>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataByIDThunkCreator(id));
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
