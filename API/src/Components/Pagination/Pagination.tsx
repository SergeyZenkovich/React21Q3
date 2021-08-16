import React, {useState} from "react";
import styled from "styled-components";
import {
  StyledPaginationBlock,
  StyledPaginatonPage,
  StyledPaginatonPageHandler
} from "./PaginationStyling";

import Prev from "../../assets/img/prev.png";
import Next from "../../assets/img/next.png";

const Pagination = ({
  totalItemsCount,
  currentPage,
  portionSize = 10,
  setFetchElems
}: {
  totalItemsCount: number;
  currentPage: number;
  portionSize: number;
  setFetchElems: (page: number) => void;
}): JSX.Element => {
  const pages = [];

  for (let i = 0; i <= totalItemsCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(totalItemsCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / 10));
  const leftPortionpageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionpageNumber = portionNumber * portionSize;

  const prevPortion = () => {
    setPortionNumber(portionNumber - 1);
  };
  const nextPortion = () => {
    setPortionNumber(portionNumber + 1);
  };
  const firstPortion = () => {
    setPortionNumber(1);
  };

  return (
    <StyledPaginationBlock>
      {portionNumber > 1 && (
        <StyledPaginatonPageHandler onClick={prevPortion}>
          <img src={Prev} alt="previous image" />
        </StyledPaginatonPageHandler>
      )}
      {pages
        .filter((p) => p >= leftPortionpageNumber && p <= rightPortionpageNumber)
        .map((p) => {
          return (
            <StyledPaginatonPage
              current={currentPage === p}
              onClick={() => {
                firstPortion();
                setFetchElems(p);
              }}
              value={p}
              key={p}
            >
              {p}
            </StyledPaginatonPage>
          );
        })}
      {portionCount > portionNumber && (
        <StyledPaginatonPageHandler onClick={nextPortion}>
          <img src={Next} alt="next image" />
        </StyledPaginatonPageHandler>
      )}
    </StyledPaginationBlock>
  );
};
export default Pagination;
