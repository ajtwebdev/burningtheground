import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Flex } from "components/layoutComponents";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useLockedBody } from "usehooks-ts";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const device = {
  sm: "18em",
  md: "70em",
};

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
    top: 140px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: start;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 16em 2em;

    height: 100vh;
    overflow: auto;

    // & > * + * {
    //   margin-left: 0;
    //   margin-top: 15px;
    // }
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
  const [scrolled, setScrolled] = useState(true);

  const { asPath } = useRouter();

  // console.log({params})

  const [locked, setLocked] = useLockedBody(false, "__next");

  const toggleLocked = () => {
    setLocked(!locked);
  };

  function toggleMenu() {
    navOpen(!nav);
    // toggleLocked();
  }

  useEffect(() => {
    navOpen(false);
  }, [asPath]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled == scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <div className={styles.header}>
        {/* <div className={styles.headertop}>
          <div className={styles.containerTop}>
            <ul>
              <li>
                <div className={styles.navLinkTop} href="tel: 403-257-4059">
                  <div>
                    <FaPhone />
                  </div>
                  403-257-4059
                </div>
              </li>
              <li>
                <div
                  className={styles.navLinkTop}
                  href="mailto: office@projectlandscape.ca"
                >
                  <div>
                    <MdOutlineEmail />
                  </div>
                  office@projectlandscape.ca
                </div>
              </li>
              <li>
                <div
                  className={styles.navLinkTop}
                  href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                  target="_blank"
                >
                  <div>
                    <MdLocationOn />
                  </div>
                  3511 64 Ave Calgary
                </div>
              </li>
            </ul>
          </div>
        </div> */}

        <div className={styles.headerbottom} data-active={scrolled}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <Link className={styles.styledLink} href="/">
                <Image
                  src="/burning-logo.svg"
                  alt="calgary band logo"
                  height={300}
                  width={270}
                />
              </Link>
            </div>
            <nav className={styles.nav}>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                <li>
                  <Link className={styles.styledNavLink} href="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/about">
                    about
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/set-list">
                    set list
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/photos">
                    photos
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledNavLink} href="/videos">
                    videos
                  </Link>
                </li>
                <li>
                  <Link className={styles.styledContactLink} href="/contact">
                    contact
                  </Link>
                </li>
              </NavList>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
