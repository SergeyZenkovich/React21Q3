import React, {useState} from "react";
import styled from "styled-components";

import {
  StyledSwitcher,
  StyledLabel,
  StyledSpanText,
  StyledSpanRounded,
  StyledInput
} from "./SwitcherStyling";

const Switcher = ({
  switchState,
  switcherCheck,
  setSwitchState,
  setSwitcherCheck
}: {
  switchState: boolean;
  switcherCheck: boolean;
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;
  setSwitcherCheck: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const changeCheckbox = (): void => {
    setSwitcherCheck(!switcherCheck);
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
        <StyledInput className="inputCheck" type="checkbox" checked={switcherCheck} />
        <StyledSpanRounded />
        <StyledSpanText data-on="Prod" data-off="Dev" />
      </StyledLabel>
    </StyledSwitcher>
  );
};
export default Switcher;
