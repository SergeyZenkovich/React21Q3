import styled from "styled-components";
import device from "../../utils/sizes";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22%;
  @media ${device.mobileS} {
    min-width: 300px;
    height: 20vh;
  }
  @media ${device.laptop} {
    min-width: 325px;
    height: 25vh;
  }

  min-height: 200px;
  margin: 15px 5px;
  border: 1px solid #000;
  overflow: hidden;
  & img {
    width: 100%;
  }
`;
