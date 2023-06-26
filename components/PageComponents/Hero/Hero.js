import React from "react";
import styled from "styled-components";
import {
  Container,
  Flex,
  Actions,
  HeroBannerPadding,
} from "../../layoutComponents";
import { ButtonPrimary, ButtonSecondaryDark } from "../../buttons";
import { FaCheckCircle } from "react-icons/fa";

const device = {
  md: "43em",
};

const HeroWrapper = styled.div`
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 90vh;
  height: 100%;

  display: grid;
  place-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`;

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;

  h1 {
    font-size: 4rem;
    line-height: 1;
    color: #fff;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.1;
  }
`;

export default function Hero({ subheader, title, description, image, video }) {
  return (
    <HeroWrapper img={image.sourceUrl}>
      <Container className="spacing">
        <Text className="spacing">
          <h1 className="bold upper">{title}</h1>
          <h2 className="upper bold">{subheader}</h2>
          {/* <p className="">{description}</p> */}
          <ButtonPrimary href="/contact">book us now &#8594;</ButtonPrimary>
        </Text>
      </Container>
    </HeroWrapper>
  );
}
