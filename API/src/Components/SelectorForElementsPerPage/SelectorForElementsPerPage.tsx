import React from "react";
import styled from "styled-components";
import {StyledSelectorBlock} from "./SelectorForElementsPerPageStyling";

const Selector = ({
  elementsOnPage,
  setElementsOnPage
}: {
  elementsOnPage: number;
  setElementsOnPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  return (
    <StyledSelectorBlock>
      <h5>Elemetns per page:</h5>
      <select
        name="resultsCount"
        id="resultsCount"
        value={elementsOnPage}
        onChange={(e) => {
          setElementsOnPage(Number(e.target.value));
        }}
      >
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="8">8</option>
        <option value="10">10</option>
      </select>
    </StyledSelectorBlock>
  );
};

export default Selector;
