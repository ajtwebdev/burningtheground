import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Flex } from "../layoutComponents";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
// import searchInput from "../SearchInput/searchInput";
import SearchBox from "../SearchInput/searchInput";

const device = {
  sm: "18em",
  md: "56em",
};

const Headertop = styled.div`
  padding: 1em 0;
  background: var(--clr-accent);

  .container {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      &:nth-child(2),
      &:nth-child(3) {
        @media screen and (max-width: ${device.md}) {
          display: none;
        }
      }
    }

    & > * + * {
      margin-left: 1.5em;
    }
  }
`;

const NavLinkTop = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }
`;

const Headerbottom = styled.div`
  background: var(--clr-dark);
  padding: 1em 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  img {
    height: 70px;
    transition: 0.4s;

    &[data-active="true"] {
      height: 90px;
    }
  }

  h2,
  p {
    color: var(--txt-light);
  }
  p {
    max-width: 400px;
    text-align: center;
    line-height: 1.1;
  }
`;

const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 150px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-dark);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;

const GetQuote = styled((props) => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.6em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-light);
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-light-secondary);
  }
`;

const Dropdown = styled.li`
  /* hover display only on desktop */
  @media screen and (min-width: ${device.md}) {
    ul {
      position: absolute;
      z-index: 1000;
      display: none;
      opacity: 1;
      margin: 0;
      padding: 2em 2em 2em 1em;
      list-style-type: none;
      background: var(--clr-dark);

      li {
        a {
          color: var(--txt-light);
        }
      }
    }

    &:hover {
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`;

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false);
  const [dropdown, dropdownOpen] = useState(false);

  function toggleMenu() {
    navOpen(!nav);
  }

  function toggleDropdown() {
    dropdownOpen(!dropdown);
  }

  return (
    <div>
      <Headertop>
        <Container className="container">
          <ul>
            <li>
              <NavLinkTop href="mailto: info@shelterinplace.us">
                <div>
                  <MdOutlineEmail />
                </div>
                info@shelterinplace.us
              </NavLinkTop>
            </li>
            <li>
              <NavLinkTop href="" target="_blank">
                <div>
                  <MdLocationOn />
                </div>
                Calgary, AB
              </NavLinkTop>
            </li>
          </ul>
          <SearchBox width="30%" />
          <GetQuote href="/become-a-christian">become a christian</GetQuote>
        </Container>
      </Headertop>
      <Headerbottom>
        <Container className="container">
          <LogoContainer>
            <Link className="title" href="/"></Link>
          </LogoContainer>
          <Nav>
            <Burger nav={nav} onClick={toggleMenu}>
              <div />
              <div />
              <div />
            </Burger>
            <NavList nav={nav}>
              <li>
                <StyledLink href="/">home</StyledLink>
              </li>
              <li>
                <StyledLink href="/about">about</StyledLink>
              </li>
              <li>
                <StyledLink href="/statement-of-faith">
                  statement of faith
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/gallery">gallery</StyledLink>
              </li>
              <Dropdown>
                <StyledLink href="/blog">
                  blog <IoMdArrowDropdown size={20} />
                </StyledLink>
                <ul>
                  <li>
                    <StyledLink href="/blog/signs-of-the-times">
                      signs of the times
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/blog/the-word">the word</StyledLink>
                  </li>
                </ul>
              </Dropdown>

              <li>
                <StyledLink href="/contact">contact</StyledLink>
              </li>
            </NavList>
          </Nav>
        </Container>
      </Headerbottom>
    </div>
  );
}
