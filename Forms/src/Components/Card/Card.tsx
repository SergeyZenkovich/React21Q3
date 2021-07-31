import React from "react";
import styled from "styled-components";
import {CardInterface} from "../../interfaces/ComponentsInterfaces";

import priceImg from "../../assets/img/price.png";
import dateImg from "../../assets/img/calendar.png";
import likeImg from "../../assets/img/like.png";

import {
  StyledCard,
  StyledCardHead,
  StyledCardBody,
  StyledParametersBlock,
  StyledCardMiniImg
} from "./CardsStyling";

const Card = ({
  cardProblem,
  cardDate,
  cardPriority,
  cardisRequestNeeded
}: CardInterface): JSX.Element => (
  <StyledCard>
    <StyledCardHead priority={cardPriority}>
      <h3>{cardProblem}</h3>
    </StyledCardHead>
    <StyledCardBody>
      <StyledParametersBlock>
        <div>
          <StyledCardMiniImg src={priceImg} alt="price logo" />
          <span>Price: {cardDate}$</span>
        </div>
        <div>
          <StyledCardMiniImg src={dateImg} alt="calendar logo" />
          <span>Release: {cardPriority}</span>
        </div>
        <div>
          <StyledCardMiniImg src={likeImg} alt="like logo" />
          <span>Likes: {cardisRequestNeeded ? "Send a feedback" : `Don't send a feedback`}</span>
        </div>
      </StyledParametersBlock>
    </StyledCardBody>
  </StyledCard>
);
export default Card;
