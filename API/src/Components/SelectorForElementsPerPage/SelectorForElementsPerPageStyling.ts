import styled from "styled-components";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

export const StyledSelectorBlock = styled.div`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  & h5 {
    margin: 0;
    padding: 0;
    font-family: "CardTextFont";
    font-size: 21px;
  }
  & select {
    margin: 0;
    padding: 0 10px;
    height: 40px;
    font-family: "CardTextFont";
    font-size: 20px;
    border: none;
    outline: none;
  }
`;
