import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {HomePageStateInterface} from "src/interfaces/reducersInterfaces";
import {useDispatch} from "react-redux";
import {getFetchedDataThunkCreator} from "src/redux/Thunks/homePageThunks";
import Serach from "../SearchBar/SearchBar";
import ImageCard from "../ImageCard/ImageCard";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import Selector from "../SelectorForElementsPerPage/SelectorForElementsPerPage";
import ErrorBlock from "../ErrorComponent/ErrorComponent";

import {FetchObject} from "../../interfaces/ComponentsInterfaces";

import {
  StyledCardsBlockWithPagination,
  StyledCardsBlock,
  HomePageBlock
} from "../HomePage/HomePageStyling";

const HomePageWithRedux = ({
  homeState,
  setActivePage
}: {
  homeState: HomePageStateInterface;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState("latest");
  const [orient, setOrientation] = useState("landscape");
  const [color, setColor] = useState("blue");
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsOnPage, setElementsOnPage] = useState(10);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const dispatch = useDispatch();
  const requestData = (page: number) => {
    setCurrentPage(page);
    dispatch(
      getFetchedDataThunkCreator({
        query,
        elementsOnPage,
        page,
        orient,
        color,
        orderBy
      })
    );
  };

  const ImagesCards =
    homeState.totalElementsCount === 0 ? (
      <ErrorBlock query={query} />
    ) : (
      homeState.elements.map((el: FetchObject) => (
        <ImageCard key={el.id} id={el.id} urls={el.urls} />
      ))
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
        searchData={requestData}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        orient={orient}
        setOrientation={setOrientation}
        color={color}
        setColor={setColor}
      />
      <StyledCardsBlockWithPagination>
        <StyledCardsBlock>{homeState.isFetching ? <Preloader /> : ImagesCards}</StyledCardsBlock>
        {homeState.totalElementsCount >= 1 ? (
          <Pagination
            totalItemsCount={homeState.totalElementsCount}
            currentPage={currentPage}
            portionSize={10}
            setFetchElems={requestData}
          />
        ) : null}
        {homeState.totalElementsCount >= 1 ? (
          <Selector elementsOnPage={elementsOnPage} setElementsOnPage={setElementsOnPage} />
        ) : null}
      </StyledCardsBlockWithPagination>
    </HomePageBlock>
  );
};
export default HomePageWithRedux;
