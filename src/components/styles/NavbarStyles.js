import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index:9999;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;
  a {
    font-size:3em;
  }

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }

  a {
    font-size:1em;
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;
