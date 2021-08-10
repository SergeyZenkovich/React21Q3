import React from "react";
import styled from "styled-components";

import {StyledHeaderBlock, StyledNavigation, StyledHeaderElement} from "./HeaderStyling";
import {NavElement} from "../../interfaces/ComponentsInterfaces";
import pagesData from "../../Data";

const Header = ({
  activePage,
  setActivePage
}: {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  const NavElements = pagesData.map((el: NavElement) => (
    <StyledHeaderElement key={el.page}>{el.page}</StyledHeaderElement>
  ));
  return (
    <StyledHeaderBlock>
      <StyledNavigation>{NavElements}</StyledNavigation>
    </StyledHeaderBlock>
  );
};

export default Header;
