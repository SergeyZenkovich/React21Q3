import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import Serach from "./Components/SearchBar/SearchBar";
import cardsData from "./Data";
import {CardInterface} from "./interfaces/ComponentsInterfaces";

const StyledCardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = (): JSX.Element => {
  const [cards, setCards] = useState([] as CardInterface[]);
  const addCard = (newCard: CardInterface): void => {
    setCards([...cards, newCard]);
  };
  const Cards = cards.map((el: CardInterface) => (
    <Card
      key={el.cardProblem}
      cardProblem={el.cardProblem}
      cardDate={el.cardDate}
      cardPriority={el.cardPriority}
      cardisRequestNeeded={el.cardisRequestNeeded}
    />
  ));
  return (
    <div>
      <Form addCard={addCard} />
      <StyledCardsBlock>{Cards}</StyledCardsBlock>
    </div>
  );
};
export default App;
