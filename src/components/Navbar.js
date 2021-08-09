import React from "react";
import { Link } from "gatsby"
import { NavbarWrapper } from "./styles/NavbarStyles";
import styled from "styled-components";

const LogoTop = styled.a`
  display: block;
  width: 220px;
  height: 40px;
  :hover {
      opacity: 0.8;
    }
  @media only screen and (min-width: 624px) {
    margin-top: -9px;
  }

`;

function Navbar({ open, handleClick }){
  return (
    <NavbarWrapper open={open}>
<Link onClick={handleClick} to="/"><LogoTop onClick={handleClick} className="menu__item" to="/"><img src={require('../images/gorettimatrona_logo.svg')} alt="Goretti Martel Matrona Las Palmas Logo" /></LogoTop></Link>
<Link onClick={handleClick} className="menu__item" to="/embarazo/"><span className="menu__item-name">Embarazo</span></Link>
<Link onClick={handleClick} className="menu__item" to="/cursos/"><span className="menu__item-name">Cursos y talleres</span></Link>
<Link onClick={handleClick} className="menu__item" to="/postparto/"><span className="menu__item-name">Postparto</span></Link>
<Link onClick={handleClick} className="menu__item" to="/#servicios_online"><span className="menu__item-name">Lactancia</span></Link>
<Link onClick={handleClick} className="menu__item" to="/#contactFormText"><span className="menu__item-name">Contacto</span></Link>
<Link onClick={handleClick} className="project__item-btn gradient_effect" to="/#contactFormText" onclick="track('Click-see-project-convy','Click-see-project-convy')">Pedir cita</Link>
    </NavbarWrapper>
  );
}

export default Navbar;
