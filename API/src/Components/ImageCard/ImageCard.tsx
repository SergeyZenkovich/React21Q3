import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FetchedURLS, FetchObject, ImageCardInterface} from "../../interfaces/ComponentsInterfaces";

import listImg from "../../assets/img/list.png";
import dateImg from "../../assets/img/calendar.png";
import likeImg from "../../assets/img/feedback.png";
import prodImg from "../../assets/img/prod.png";

import {StyledCard} from "./ImageCardStyling";

const ImageCard = ({id, urls}: {id: string; urls: FetchedURLS}): JSX.Element => (
  <StyledCard>
    {/* <NavLink to={`/details/${id}`}>
      <img src={urls.regular} alt="" />
    </NavLink> */}
    <NavLink to={`/detailsDuplication/${id}`}>
      <img src={urls.regular} alt="" />
    </NavLink>
  </StyledCard>
);
export default ImageCard;
