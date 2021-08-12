import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {CardInterface, FetchObject} from "../../interfaces/ComponentsInterfaces";

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

const Card = ({id, color, alt_description, likes, urls, user}: FetchObject): JSX.Element => {
  const [cardDescription, setcardDescription] = useState(alt_description);
  const [cardLikes, setcardLikes] = useState(likes);
  // const [cardUrl, setcardUrl] = useState(urls.regular);
  const [cardUser, setcardUser] = useState(user);
  useEffect(() => {
    console.log("second");
    window.localStorage.setItem("cardDescription", cardDescription);
    window.localStorage.setItem("cardLikes", String(cardLikes));
    // window.localStorage.setItem("cardUrl", cardUrl);
    window.localStorage.setItem("cardUser", JSON.stringify(cardUser));
  }, [cardDescription, cardLikes, cardUser]);
  useEffect(() => {
    console.log("first");
    setcardDescription(JSON.parse(window.localStorage.getItem("cardDescription")));
    setcardLikes(Number(JSON.parse(window.localStorage.getItem("cardLikes"))));
    // setcardUrl(JSON.parse(window.localStorage.getItem("cardUrl")));
    setcardUser(JSON.parse(window.localStorage.getItem("cardUser")));
  }, []);
  return (
    <StyledCard>
      <StyledCardBody>
        <StyledParametersBlock>
          {/* <img src={urls.regular} alt="image" /> */}
          <StyledSeparatorBlock>Image info</StyledSeparatorBlock>
          {alt_description ? (
            <div>
              <StyledCardMiniImg src={description} alt="description" />
              <span>{alt_description}</span>
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
      </StyledCardBody>
    </StyledCard>
  );
};
export default Card;
