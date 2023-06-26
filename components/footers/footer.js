import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Container } from "../layoutComponents";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import FormFooter from "../Forms/FormFooter";
import Image from "next/image";
import SearchBox from "../SearchInput/searchInput";

const device = {
  md: "48em",
  lg: "57em",
};

const IconStyle = {
  color: "var(--clr-accent)",
};

const Flex = styled.div`
  display: flex;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer-lg);
    }
  }
`;

const FooterWrapper = styled.footer`
  padding: 4em 0 1em 0;
  background: var(--clr-dark);

  h4 {
    color: var(--txt-light);
  }

  ul {
    list-style-type: none;
  }
`;

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 10px;
    }
  }

  img {
    width: 25px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--txt-light);

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`;

const ContactLink = styled.a`
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

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--txt-light);

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`;

const PageLinks = styled.div`
  color: var(--txt-light);
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Author = styled.div`
  color: var(--txt-light-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }

  .img {
    width: 150px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container className="spacing-lg">
        <Flex>
          <Flex>
            <div className="spacing">
              <LogoContainer>
                <Link className="title" href="/" style={{ marginBottom: "10px" }}>
                  shelter in place
                  {/* <h2 className="title">shelter in place</h2>
                  <p className="body--small">
                    The name of the Lord is strong tower and the righteous run
                    into it and safe - Proverbs 18:10
                  </p> */}
                </Link>
                <SearchBox width="100%" />
              </LogoContainer>
            </div>
            <Divider />
          </Flex>
          <Flex>
            <div className="spacing-lg">
              <div className="spacing">
                <h4 className="subheader">contact us</h4>
                <ul>
                  <li>
                    <ContactLink href="mailto: info@shelterinplace.ca">
                      <div>
                        <MdOutlineEmail style={IconStyle} />
                      </div>
                      info@shelterinplace.ca
                    </ContactLink>
                  </li>
                </ul>
              </div>
            </div>
            <Divider />
          </Flex>
          <div>
            <h4 className="subheader">email us</h4>
            <FormFooter />
          </div>
        </Flex>
        <hr />
        <PageLinks>
          <Flex>
            <div className="center">
              <center>
                <h3 className="subheader">Page Links</h3>
              </center>
              <ul>
                <li>
                  <StyledLink href="/">Home</StyledLink>
                </li>
                <li>
                  <StyledLink href="/about">About</StyledLink>
                </li>
                <li>
                  <StyledLink href="/statement-of-faith">
                    Statement of Faith
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href="/gallery">Gallery</StyledLink>
                </li>
                <li>
                  <StyledLink href="/blog">Blog</StyledLink>
                </li>
                <li>
                  <StyledLink href="/contact">Contact</StyledLink>
                </li>
                <li>
                  <StyledLink href="/become-a-christian">
                    Become a Christian
                  </StyledLink>
                </li>
              </ul>
            </div>
          </Flex>
        </PageLinks>
        <Copyright>
          <ul>
            <li>Copyright&#169; 2023</li>
            <li>Shelter In Place</li>
            <li>All Rights Reserved</li>
            <li>
              <a target="blank" href="">
                Terms of use
              </a>
            </li>
            <li>
              <a target="blank" href="">
                Privacy Policy
              </a>
            </li>
          </ul>
        </Copyright>
        <hr />
        <Author>
          <Container>
            <div>
              <p>website by: </p>
              <a target="_blank" href="https://www.aarontonner.com">
                <Image
                  src="/aaron-tonner-web-solutions-logo-white-white.svg"
                  alt="aaron tonner web solutions logo"
                  width={100}
                  height={100}
                />
              </a>
            </div>
          </Container>
        </Author>
      </Container>
    </FooterWrapper>
  );
}
