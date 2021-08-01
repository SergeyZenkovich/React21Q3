import React, {useState} from "react";
import styled from "styled-components";

const StyledSwitcher = styled.div`
  margin: 10px 0;
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 40px;
`;
const StyledSpanText = styled.span`
  position: absolute;
  top: 0;
  display: block;
  height: inherit;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: normal;
  line-height: 2.5rem;
  &:before {
    content: attr(data-off);
    position: relative;
    left: 50px;
    opacity: 1;
  }
  &:after {
    content: attr(data-on);
    position: relative;
    right: 40px;
    opacity: 0;
  }
`;
const StyledSpanRounded = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4dadf7;
  border-radius: 34px;
  transition: 0.3s;
  &:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.3s;
    border-radius: 50%;
  }
`;

const StyledInput = styled.input`
  padding: 0;
  opacity: 0;
  width: 0;
  height: 0;
  box-sizing: border-box;
  &:checked + ${StyledSpanRounded} {
    background-color: #f03e3d;
  }
  &:checked + ${StyledSpanRounded}:before {
    transform: translateX(110px);
  }
  &:checked ~ ${StyledSpanText}:before {
    opacity: 0;
  }
  &:checked ~ ${StyledSpanText}:after {
    opacity: 1;
  }
`;

const Switcher = (): JSX.Element => {
  const [switchState, setSwitchState] = useState(true);

  const changeCheckbox = (): void => {
    const checkbox = document.querySelector(".inputCheck") as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
  };

  return (
    <StyledSwitcher
      onClick={(event) => {
        event.preventDefault();
        changeCheckbox();
        setSwitchState(!switchState);
      }}
    >
      <StyledLabel>
        <StyledInput className="inputCheck" type="checkbox" />
        <StyledSpanRounded />
        <StyledSpanText data-on="Prod" data-off="Dev" />
      </StyledLabel>
    </StyledSwitcher>
  );
};
export default Switcher;
