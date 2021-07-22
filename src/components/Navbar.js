import React from "react";
import { Link } from "gatsby"
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
<Link className="menu__item" to="/embarazo/"><span className="menu__item-name">embarazo</span></Link>
<Link className="menu__item" to="#skills"><span className="menu__item-name">cursos y talleres</span></Link>
<Link className="menu__item" to="#side_project"><span className="menu__item-name">postparto</span></Link>
<Link className="menu__item" to="#side_project"><span className="menu__item-name">lactancia</span></Link>
<Link className="menu__item" to="#contactForm"><span className="menu__item-name">contacto</span></Link>
    </NavbarWrapper>
  );
}

export default Navbar;
