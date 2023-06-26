import React from "react";
import { Container, GridThree, Section } from "./layoutComponents";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import styled from "styled-components";
import Link from "next/link";

const IconStyle = {
  color: "var(--clr-tan)",
  fontSize: "55px",
};

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--clr-tan);

  .light-item {
    background: var(--clr-accent-lighter);
  }
`;

const Item = styled.div`
  display: grid;
  place-items: center;
  max-width: 90ch;
  padding: 4em 2em;

  .link {
    &:hover {
      color: var(--txt-light);
    }
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  font-family: var(--ff-alfa);
  font-size: var(--fs-2);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: 1.1;
  color: var(--clr-tan);
  &:hover {
    color: var(--txt-light);
  }
`;

export default function ContactBanner() {
  return (
    <Wrapper>
      <Container>
        <GridThree>
          <Item className="spacing">
            <VscWorkspaceTrusted style={IconStyle} />
            <StyledLink href="/about">trusted care</StyledLink>
            <p>
              When professional is what you want, professional is what you’ll
              get. We are your trusted team of landscaping experts who put your
              needs first.
            </p>
          </Item>
          <Item className="spacing light-item">
            <BsFillCalendar2DateFill style={IconStyle} />
            <StyledLink href="/contact">schedule now</StyledLink>
            <p>
              If you are looking for experience and quality landscaping in
              Calgary, look no further than Project Landscape. From maintenance
              to specialty projects, we do it all.
            </p>
          </Item>
          <Item className="spacing">
            <AiOutlinePhone style={IconStyle} />
            <StyledLink href="/contact">contact us</StyledLink>
            <p>
              Questions? Our support has you covered. Get in touch with us today
              and let us take care of all your landscaping design and
              construction needs the right way.
            </p>
          </Item>
        </GridThree>
      </Container>
    </Wrapper>
  );
}
