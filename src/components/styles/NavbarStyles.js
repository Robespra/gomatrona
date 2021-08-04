import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index:9999;
  top: 0;
  left: ${props => (props.open ? "0" : "100%")};
  width: 100%;
  height: 100vh;
  transition: left 0.3s linear;
  background:white;
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
  .project__item-btn {
    display:block;
    position: relative;
    right: 0;
    letter-spacing: .04em;
    line-height:6vh;
    padding:0 0,3em;
    color:#fff;
    background-color:#D0A3B6;
    cursor:pointer
  }
`;
