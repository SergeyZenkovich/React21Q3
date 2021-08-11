import React from "react";
import styled from "styled-components";
import {FetchObject, ImageCardInterface} from "../../interfaces/ComponentsInterfaces";

import listImg from "../../assets/img/list.png";
import dateImg from "../../assets/img/calendar.png";
import likeImg from "../../assets/img/feedback.png";
import prodImg from "../../assets/img/prod.png";

import {StyledCard} from "./ImageCardStyling";

const ImageCard = ({id, color, likes, alt_description, user, urls}: FetchObject): JSX.Element => (
  <StyledCard>
    <img src={urls.regular} alt="" />
  </StyledCard>
);
export default ImageCard;
