import styled from "styled-components";
import device from "../../utils/sizes";

import fontH from "../../assets/fonts/BebasNeue-Regular.ttf";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24%;
  @media ${device.mobileS} {
    min-width: 160px;
  }
  @media ${device.laptop} {
    min-width: 275px;
  }
  min-width: 160px;
  height: 50%;
  min-height: 200px;
  margin: 15px 5px;
  border: 1px solid #000;
`;
export const StyledCardHead = styled.div`
  @font-face {
  font-family: "CardHeadingFont";
    src: url(${fontH})
}
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5%;
  background-color: #bcc2c3;
  & h3 {
    color: #fff;
    font-family: 'CardHeadingFont';
    font-size: 1em;
    margin 2% 0;
  }
`;
export const StyledCardBody = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #f5f8f9;
`;
export const StyledParametersBlock = styled.div`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    width: 98%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
  & div {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  & div span {
    font-family: "CardTextFont";
  }
`;
export const StyledCardImage = styled.img`
  width: 50%;
  @media ${device.mobileS} {
    min-width: 150px;
  }
  @media ${device.laptop} {
    min-width: 90px;
  }
`;
export const StyledCardMiniImg = styled.img`
  width: 30px;
  height: 30px;
  @media ${device.mobileS} {
    margin: 0 5px;
  }
  @media ${device.laptop} {
    margin: 0 10px;
  }
`;
