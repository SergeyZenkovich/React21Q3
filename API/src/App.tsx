import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "./Components/Form/Form";
import Serach from "./Components/SearchBar/SearchBar";
import {CardInterface, ImageCardInterface} from "./interfaces/ComponentsInterfaces";
import ImageCard from "./Components/ImageCard/ImageCard";

interface URLs {
  urls?: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

class PhotosURLClass {
  urls: URL = null;

  constructor(...args) {
    args.forEach((item: PhotosURLClass) => {
      this.urls = item.urls || null;
    });
  }
}

const StyledCardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const useSomething = () => {
  const [x, setX] = useState("x");
  const l = () => {
    setX(`${x}Y`);
  };
  return [x, l];
};

const useFetchData = (): [string[], () => Promise<void>] => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingElems, setFetchingElems] = useState([] as string[]);
  const API_KEY = "usJhdOuMAY8QeXFMb6GhSKgSGbOn5pH7SzDM9NPT-f0";

  const fetchDataAsync = async (): Promise<void> => {
    const result = await (
      await fetch(
        `https://api.unsplash.com/photos/?client_id=${API_KEY}&orientation=portrait&color=purple&order_by=relevant`
      )
    ).json();
    const urls = result.map((el: URLs) => el.urls.regular);
    const urls2 = new PhotosURLClass(result);
    console.log(urls2);
    setFetchingElems(urls);
  };

  return [fetchingElems, fetchDataAsync];
};

const App = (): JSX.Element => {
  const [cards, setCards] = useState([] as CardInterface[]);
  const [elements, setElements] = useState([]);
  const [fetchElems, setFetchElems] = useFetchData();
  const addCard = (newCard: CardInterface): void => {
    setCards([...cards, newCard]);
  };

  const ImagesCards = fetchElems.map((el: string) => <ImageCard key={el} url={el} />);
  return (
    <div>
      <Serach searchData={setFetchElems} />
      <Form addCard={addCard} />
      <StyledCardsBlock>{ImagesCards}</StyledCardsBlock>
    </div>
  );
};
export default App;
