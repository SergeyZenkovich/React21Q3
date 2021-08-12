import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Serach from "../SearchBar/SearchBar";
import ImageCard from "../ImageCard/ImageCard";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import Selector from "../SelectorForElementsPerPage/SelectorForElementsPerPage";
import ErrorBlock from "../ErrorComponent/ErrorComponent";

import {URLs, FetchObject} from "../../interfaces/ComponentsInterfaces";

import {StyledCardsBlockWithPagination, StyledCardsBlock, HomePageBlock} from "./HomePageStyling";

const useFetchData = (
  query: string,
  orderBy: string,
  orientation: string,
  color: string,
  currentPage: number,
  elementsOnPage: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): [[FetchObject[], number], (page?: number) => Promise<void>] => {
  const [fetchingElems, setFetchingElems] = useState([] as FetchObject[]);
  const [totalPages, setTotalPages] = useState(-1);
  const API_KEY = "usJhdOuMAY8QeXFMb6GhSKgSGbOn5pH7SzDM9NPT-f0";

  const fetchDataAsync = async (page?: number): Promise<void> => {
    setIsLoading(true);
    const result = await (
      await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${
          page || currentPage
        }&per_page=${elementsOnPage}&orientation=${orientation}&color=${color}&order_by=${orderBy}`
      )
    ).json();
    const fetchedObjects = result.results.map((el: FetchObject) => ({
      alt_description: el.alt_description,
      color: el.color,
      id: el.id,
      likes: el.likes,
      urls: el.urls,
      user: el.user
    }));
    const urls = result.results.map((el: URLs) => el.urls.regular);
    setFetchingElems(fetchedObjects);
    setTotalPages(result.total_pages);
    setIsLoading(false);
  };

  return [[fetchingElems, totalPages], fetchDataAsync];
};

const HomePage = ({
  setActivePage,
  setPageElements
}: {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  setPageElements: React.Dispatch<React.SetStateAction<FetchObject[]>>;
}): JSX.Element => {
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState("latest");
  const [orientation, setOrientation] = useState("landscape");
  const [color, setColor] = useState("blue");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsOnPage, setElementsOnPage] = useState(10);

  const [fetchElems, setFetchElems] = useFetchData(
    query,
    orderBy,
    orientation,
    color,
    currentPage,
    elementsOnPage,
    setIsLoading
  );
  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const searchNewData = (): void => {
    setCurrentPage(1);
    setFetchElems(1);
  };
  useEffect(() => {
    setActivePage("Home");
  }, []);
  useEffect(() => setPageElements(fetchElems[0]), [fetchElems, setPageElements]);
  const ImagesCards =
    fetchElems[1] === 0 ? (
      <ErrorBlock query={query} />
    ) : (
      fetchElems[0].map((el: FetchObject) => <ImageCard key={el.id} id={el.id} urls={el.urls} />)
    );
  return (
    <HomePageBlock
      as={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Serach
        query={query}
        setQuery={setQuery}
        searchData={searchNewData}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        orientation={orientation}
        setOrientation={setOrientation}
        color={color}
        setColor={setColor}
      />
      <StyledCardsBlockWithPagination>
        <StyledCardsBlock>{isLoading ? <Preloader /> : ImagesCards}</StyledCardsBlock>
        {fetchElems[1] >= 1 ? (
          <Pagination
            totalItemsCount={fetchElems[1]}
            currentPage={currentPage}
            onPageChanged={changePage}
            portionSize={10}
            setFetchElems={setFetchElems}
          />
        ) : null}
        {fetchElems[1] >= 1 ? (
          <Selector elementsOnPage={elementsOnPage} setElementsOnPage={setElementsOnPage} />
        ) : null}
      </StyledCardsBlockWithPagination>
    </HomePageBlock>
  );
};
export default HomePage;
