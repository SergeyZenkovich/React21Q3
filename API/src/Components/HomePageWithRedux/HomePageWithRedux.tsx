import React, {useEffect} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {getFetchedDataThunkCreator} from "../../redux/Thunks/homePageThunks";
import {setRequestPageParam} from "../../redux/ActionCreators/homePageActionCreators";
import {HomePageStateInterface} from "../../interfaces/reducersInterfaces";
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
  const dispatch = useDispatch();
  const requestData = (pageNumber: number) => {
    dispatch(setRequestPageParam(pageNumber));
    dispatch(
      getFetchedDataThunkCreator({
        query,
        elementsOnPage,
        page: pageNumber,
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
        searchData={requestData}
        orderBy={orderBy}
        orient={orient}
        color={color}
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
        {homeState.totalElementsCount >= 1 ? <Selector elementsOnPage={elementsOnPage} /> : null}
      </StyledCardsBlockWithPagination>
    </HomePageBlock>
  );
};
export default HomePageWithRedux;
