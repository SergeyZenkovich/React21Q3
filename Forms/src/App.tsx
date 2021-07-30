import React from "react";
import styled from "styled-components";
import Card from "./Components/Card/Card";
import Serach from "./Components/SearchBar/SearchBar";
import cardsData from "./Data";
import {CardInterface} from "./interfaces/ComponentsInterfaces";

const StyledCardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = (): JSX.Element => {
  const Cards = cardsData.map((el: CardInterface) => (
    <Card
      key={el.cardName}
      cardName={el.cardName}
      cardPrice={el.cardPrice}
      cardYear={el.cardYear}
      cardLikes={el.cardLikes}
      cardRating={el.cardRating}
      cardImg={el.cardImg}
    />
  ));
  return (
    <div>
      <Serach />
      <StyledCardsBlock>{Cards}</StyledCardsBlock>
    </div>
  );
};
export default App;
