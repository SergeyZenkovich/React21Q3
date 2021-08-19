import styled from "styled-components";
import device from "../../utils/sizes";

import fontH from "../../assets/fonts/BebasNeue-Regular.ttf";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media ${device.mobileS} {
    min-width: 300px;
  }
  @media ${device.laptop} {
    min-width: 375px;
  }
  height: 50%;
  min-height: 400px;
  margin: 15px 5px;
`;
// export const StyledCardHead = styled.div`
//   @font-face {
//   font-family: "CardHeadingFont";
//     src: url(${fontH})
// }
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 5%;
//   background-color: ${({priority}: {priority: string}) =>
//     priority === "low" ? "#a6cd72" : priority === "medium" ? "#e2d100" : "#b82f34"};
//   & h3 {
//     color: #fff;
//     font-family: 'CardHeadingFont';
//     font-size: 1.25em;
//     margin 2% 0;
//   }
// `;
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
export const StyledSeparatorBlock = styled.div`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 2px solid #000;
  font-family: "CardTextFont";
  fonxt-size: 22px;
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
    width: 70%;
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
