import styled from "styled-components";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

export const StyledSearchBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #000a;
  margin-bottom: 10px;
  padding: 0;
`;
export const StyledSearchInput = styled.input`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  display: flex;
  width: 75%;
  height: 45px;
  padding: 0 10px;
  font-family: "CardTextFont";
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 1em;
`;
export const StyledCardButton = styled.button`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  width: 15%;
  height: 45px;
  margin: 0 5px;
  font-family: "CardTextFont";
  border: none;
  font-size: 1em;
  border-radius: 3px;
  background-color: #ddde;
  &:hover {
    cursor: pointer;
    background-color: #eeef;
  }
`;
