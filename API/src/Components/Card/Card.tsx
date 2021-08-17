import React from "react";
import styled from "styled-components";
import {FetchObject} from "../../interfaces/ComponentsInterfaces";
import {DetailsPageStateInterface} from "../../interfaces/reducersInterfaces";

import description from "../../assets/img/description.png";
import likeImg from "../../assets/img/like.png";
import name from "../../assets/img/name.png";
import place from "../../assets/img/location.png";
import tw from "../../assets/img/twitter.png";
import inst from "../../assets/img/instagram.png";
import heart from "../../assets/img/heart.png";
import photos from "../../assets/img/photos.png";
import prodImg from "../../assets/img/prod.png";

import {
  StyledCard,
  StyledCardBody,
  StyledParametersBlock,
  StyledCardMiniImg,
  StyledSeparatorBlock
} from "./CardsStyling";
import PreloaderForCard from "../PreloaderForCard/PreloaderForCard";

const Card = ({isLoading, element}: DetailsPageStateInterface): JSX.Element => {
  const {id, color, alt_description: imageDescription, likes, urls, user} = element;
  if (isLoading) {
    return <PreloaderForCard />;
  }
  return (
    <StyledCard>
      <StyledCardBody>
        {id ? (
          <StyledParametersBlock>
            <img src={urls.regular} alt="image" />
            <StyledSeparatorBlock>Image info</StyledSeparatorBlock>
            {imageDescription ? (
              <div>
                <StyledCardMiniImg src={description} alt="description" />
                <span>{imageDescription}</span>
              </div>
            ) : null}
            <div>
              <StyledCardMiniImg src={likeImg} alt="like logo" />
              <span>{likes}</span>
            </div>
            <StyledSeparatorBlock>User info</StyledSeparatorBlock>
            {user.username ? (
              <div>
                <StyledCardMiniImg src={name} alt="priority logo" />
                <span>{user.username}</span>
              </div>
            ) : null}
            {user.location ? (
              <div>
                <StyledCardMiniImg src={place} alt="priority logo" />
                <span>{user.location}</span>
              </div>
            ) : null}
            {user.twitter_username ? (
              <div>
                <StyledCardMiniImg src={tw} alt="priority logo" />
                <span>{user.twitter_username}</span>
              </div>
            ) : null}
            {user.instagram_username ? (
              <div>
                <StyledCardMiniImg src={inst} alt="priority logo" />
                <span>{user.instagram_username}</span>
              </div>
            ) : null}
            {user.total_photos ? (
              <div>
                <StyledCardMiniImg src={photos} alt="priority logo" />
                <span>{user.total_photos}</span>
              </div>
            ) : null}
            {user.total_likes ? (
              <div>
                <StyledCardMiniImg src={heart} alt="priority logo" />
                <span>{user.total_likes}</span>
              </div>
            ) : null}
          </StyledParametersBlock>
        ) : null}
      </StyledCardBody>
    </StyledCard>
  );
};
export default Card;
