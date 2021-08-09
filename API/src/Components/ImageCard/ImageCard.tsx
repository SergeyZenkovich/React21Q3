import React from "react";
import styled from "styled-components";
import {ImageCardInterface} from "../../interfaces/ComponentsInterfaces";

import listImg from "../../assets/img/list.png";
import dateImg from "../../assets/img/calendar.png";
import likeImg from "../../assets/img/feedback.png";
import prodImg from "../../assets/img/prod.png";

import {StyledCard} from "./ImageCardStyling";

const ImageCard = ({url}: ImageCardInterface): JSX.Element => (
  <StyledCard>
    <img src={url} alt="" />
  </StyledCard>
);
export default ImageCard;
