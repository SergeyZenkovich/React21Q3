import React from "react";
import {NavLink} from "react-router-dom";
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
    <NavLink key={el.page} to={el.link}>
      <StyledHeaderElement activePage={activePage === el.page}>{el.page}</StyledHeaderElement>
    </NavLink>
  ));
  return (
    <StyledHeaderBlock>
      <StyledNavigation>{NavElements}</StyledNavigation>
    </StyledHeaderBlock>
  );
};

export default Header;
