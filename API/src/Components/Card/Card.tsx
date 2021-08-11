import React from "react";
import styled from "styled-components";
import {CardInterface} from "../../interfaces/ComponentsInterfaces";

import listImg from "../../assets/img/list.png";
import dateImg from "../../assets/img/calendar.png";
import likeImg from "../../assets/img/feedback.png";
import prodImg from "../../assets/img/prod.png";

import {
  StyledCard,
  StyledCardHead,
  StyledCardBody,
  StyledParametersBlock,
  StyledCardMiniImg
} from "./CardsStyling";

const Card = (): JSX.Element => (
  <StyledCard>
    <StyledCardHead>
      <h3>Winter</h3>
    </StyledCardHead>
    <StyledCardBody>
      <StyledParametersBlock>
        <div>
          <StyledCardMiniImg src={dateImg} alt="date logo" />
          <span>Date: 05.050.1998</span>
        </div>
        <div>
          <StyledCardMiniImg src={listImg} alt="priority logo" />
          <span>Hight</span>
        </div>
        <div>
          <StyledCardMiniImg src={likeImg} alt="like logo" />
          <span>Yeah</span>
        </div>
      </StyledParametersBlock>
    </StyledCardBody>
  </StyledCard>
);
export default Card;
