import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "./Components/Form/Form";
import Serach from "./Components/SearchBar/SearchBar";
import {CardInterface, ImageCardInterface} from "./interfaces/ComponentsInterfaces";
import ImageCard from "./Components/ImageCard/ImageCard";

const StyledCardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = (): JSX.Element => {
  const [cards, setCards] = useState([] as CardInterface[]);
  const [elements, setElements] = useState([]);
  const addCard = (newCard: CardInterface): void => {
    setCards([...cards, newCard]);
  };
  const API_KEY = "usJhdOuMAY8QeXFMb6GhSKgSGbOn5pH7SzDM9NPT-f0";

  useEffect(() => {
    const fetchDataAsync = async (): Promise<void> => {
      const result = await (
        await fetch(
          `https://api.unsplash.com/photos/?client_id=${API_KEY}&orientation=portrait&color=purple&order_by=relevant`
        )
      ).json();
      const urls = result.map((el) => el.urls.regular);
      setElements(urls);
    };
    fetchDataAsync();
  }, []);
  const ImagesCards = elements.map((el: string) => <ImageCard key={el} url={el} />);
  return (
    <div>
      <Serach />
      <Form addCard={addCard} />
      <StyledCardsBlock>{ImagesCards}</StyledCardsBlock>
    </div>
  );
};
export default App;
