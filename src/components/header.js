import React, { useState } from "react";
import { Link } from "gatsby"
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import styled from "styled-components";

const LogoTopMobile = styled.a`
  display: block;
  position: relative;
  width: 170px;
  top: 8%;
  height: 30px;
  margin: 0 auto;
  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Navbar open={open} handleClick={handleClick} />
      <MenuButton open={open} handleClick={handleClick} />
      <LogoTopMobile className="menu__item" href="/"><img src={require('../images/gorettimatrona_logo.svg')} alt="Goretti Martel Matrona Las Palmas Logo" /></LogoTopMobile>
    </HeaderWrapper>
  );
}

export default Header;

