import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {setRequestElementsOnPage} from "../../redux/ActionCreators/homePageActionCreators";
import {StyledSelectorBlock} from "./SelectorForElementsPerPageStyling";

const Selector = ({elementsOnPage}: {elementsOnPage: number}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <StyledSelectorBlock>
      <h5>Elemetns per page:</h5>
      <select
        name="resultsCount"
        id="resultsCount"
        value={elementsOnPage}
        onChange={(e) => {
          dispatch(setRequestElementsOnPage(Number(e.target.value)));
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
