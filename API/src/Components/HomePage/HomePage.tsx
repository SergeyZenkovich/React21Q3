import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Serach from "../SearchBar/SearchBar";
import ImageCard from "../ImageCard/ImageCard";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import Selector from "../SelectorForElementsPerPage/SelectorForElementsPerPage";
import ErrorBlock from "../ErrorComponent/ErrorComponent";

import {URLs} from "../../interfaces/ComponentsInterfaces";

const StyledCardsBlockWithPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
  currentPage: number,
  elementsOnPage: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): [[string[], number], (page?: number) => Promise<void>] => {
  const [fetchingElems, setFetchingElems] = useState([] as string[]);
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
    const urls = result.results.map((el: URLs) => el.urls.regular);
    setFetchingElems(urls);
    setTotalPages(result.total_pages);
    setIsLoading(false);
  };

  return [[fetchingElems, totalPages], fetchDataAsync];
};

const HomePage = (): JSX.Element => {
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
  const ImagesCards =
    fetchElems[1] === 0 ? (
      <ErrorBlock query={query} />
    ) : (
      fetchElems[0].map((el: string) => <ImageCard key={el} url={el} />)
    );
  return (
    <div>
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
    </div>
  );
};
export default HomePage;
