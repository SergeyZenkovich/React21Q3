import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "./Components/Form/Form";
import Serach from "./Components/SearchBar/SearchBar";
import {CardInterface, ImageCardInterface} from "./interfaces/ComponentsInterfaces";
import ImageCard from "./Components/ImageCard/ImageCard";
import Preloader from "./Components/Preloader/Preloader";

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
    console.log(...args);
    args.forEach((item: PhotosURLClass) => {
      this.urls = item.urls || null;
    });
  }
}

const StyledCardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const useFetchData = (
  query: string,
  orderBy: string,
  orientation: string,
  color: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): [string[], () => Promise<void>] => {
  // const [isLoading, setIsLoading] = useState(false);
  const [fetchingElems, setFetchingElems] = useState([] as string[]);
  const API_KEY = "usJhdOuMAY8QeXFMb6GhSKgSGbOn5pH7SzDM9NPT-f0";

  const fetchDataAsync = async (): Promise<void> => {
    setIsLoading(true);
    const result = await (
      await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&orientation=${orientation}&color=${color}&order_by=${orderBy}`
      )
    ).json();
    const urls = result.results.map((el: URLs) => el.urls.regular);
    const urls2 = new PhotosURLClass(result);
    setFetchingElems(urls);
    setIsLoading(false);
  };

  return [fetchingElems, fetchDataAsync];
};

const App = (): JSX.Element => {
  const [cards, setCards] = useState([] as CardInterface[]);
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState("latest");
  const [orientation, setOrientation] = useState("landscape");
  const [color, setColor] = useState("blue");
  const [isLoading, setIsLoading] = useState(false);
  const [elements, setElements] = useState([]);

  const [fetchElems, setFetchElems] = useFetchData(
    query,
    orderBy,
    orientation,
    color,
    setIsLoading
  );
  const addCard = (newCard: CardInterface): void => {
    setCards([...cards, newCard]);
  };

  const ImagesCards = fetchElems.map((el: string) => <ImageCard key={el} url={el} />);
  return (
    <div>
      <Serach
        query={query}
        setQuery={setQuery}
        searchData={setFetchElems}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        orientation={orientation}
        setOrientation={setOrientation}
        color={color}
        setColor={setColor}
      />
      <StyledCardsBlock>{isLoading ? <Preloader /> : ImagesCards}</StyledCardsBlock>
    </div>
  );
};
export default App;
