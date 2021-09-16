import React, {useEffect} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {HomePageStateInterface} from "src/interfaces/reducersInterfaces";
import {useActions} from "src/hooks/useActions";
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
  const {query, orient, orderBy, color, page, elementsOnPage} = homeState.requestParams;

  useEffect(() => {
    setActivePage("Home");
  }, []);
  const {
    getFetchedDataThunkCreator,
    setRequestPageParam,
    setRequestElementsOnPage,
    setRequestQueryParam,
    setRequestOrientParam,
    setRequestOrderParam,
    setRequestColorParam
  } = useActions();
  const requestData = (pageNumber: number) => {
    setRequestPageParam(pageNumber);
    getFetchedDataThunkCreator({
      query,
      elementsOnPage,
      page: pageNumber,
      orient,
      color,
      orderBy
    });
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
        setQuery={setRequestQueryParam}
        searchData={requestData}
        orderBy={orderBy}
        setOrderBy={setRequestOrderParam}
        orient={orient}
        setOrientation={setRequestOrientParam}
        color={color}
        setColor={setRequestColorParam}
      />
      <StyledCardsBlockWithPagination>
        <StyledCardsBlock>{homeState.isFetching ? <Preloader /> : ImagesCards}</StyledCardsBlock>
        {homeState.totalElementsCount >= 1 ? (
          <Pagination
            totalItemsCount={homeState.totalElementsCount}
            currentPage={page}
            portionSize={10}
            setFetchElems={requestData}
          />
        ) : null}
        {homeState.totalElementsCount >= 1 ? (
          <Selector elementsOnPage={elementsOnPage} setElementsOnPage={setRequestElementsOnPage} />
        ) : null}
      </StyledCardsBlockWithPagination>
    </HomePageBlock>
  );
};
export default HomePageWithRedux;
