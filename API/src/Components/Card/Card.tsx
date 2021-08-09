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
          <StyledCardMiniImg src={dateImg} alt="date logo" />
          <span>Date: {cardDate}</span>
        </div>
        <div>
          <StyledCardMiniImg src={listImg} alt="priority logo" />
          <span>Priority: {cardPriority}</span>
        </div>
        <div>
          <StyledCardMiniImg src={likeImg} alt="like logo" />
          <span>Feedback: {cardisRequestNeeded ? "Send a feedback" : `Don't send a feedback`}</span>
        </div>
      </StyledParametersBlock>
    </StyledCardBody>
  </StyledCard>
);
export default Card;
