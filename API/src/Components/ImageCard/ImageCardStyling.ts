import styled from "styled-components";
import device from "../../utils/sizes";

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
  height: 50%;
  min-height: 200px;
  margin: 15px 5px;
  border: 1px solid #000;
  & img {
    width: 100%;
    height: 100%;
  }
`;
