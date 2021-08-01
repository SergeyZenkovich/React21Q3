import React from "react";
import styled from "styled-components";
import {CardInterface} from "../../interfaces/ComponentsInterfaces";

import priceImg from "../../assets/img/price.png";
import dateImg from "../../assets/img/calendar.png";
import likeImg from "../../assets/img/like.png";
import ratingImg from "../../assets/img/star.png";

import {
  StyledCard,
  StyledCardHead,
  StyledCardBody,
  StyledParametersBlock,
  StyledCardImage,
  StyledCardMiniImg
} from "./CardsStyling";

const Card = ({
  cardName,
  cardPrice,
  cardYear,
  cardLikes,
  cardRating,
  cardImg
}: CardInterface): JSX.Element => (
  <StyledCard>
    <StyledCardHead>
      <h3>{cardName}</h3>
    </StyledCardHead>
    <StyledCardBody>
      <StyledCardImage src={cardImg} alt="phoneImage" />
      <StyledParametersBlock>
        <div>
          <StyledCardMiniImg src={priceImg} alt="price logo" />
          <span>Price: {cardPrice}$</span>
        </div>
        <div>
          <StyledCardMiniImg src={dateImg} alt="calendar logo" />
          <span>Release: {cardYear}</span>
        </div>
        <div>
          <StyledCardMiniImg src={likeImg} alt="like logo" />
          <span>Likes: {cardLikes}</span>
        </div>
        <div>
          <StyledCardMiniImg src={ratingImg} alt="rating logo" />
          <span>Rating: {cardRating}</span>
        </div>
      </StyledParametersBlock>
    </StyledCardBody>
  </StyledCard>
);
export default Card;
