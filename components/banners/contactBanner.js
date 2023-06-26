import React from "react";
import styled from "styled-components";
import { Container, HeroBannerPadding } from "../layoutComponents";

const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`;

const Wrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 60vh;
  height: 100%;
`;

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default function ContactBanner(props) {
  return (
    <div>
      <HeroBannerPadding />
      <BannerGrid>
        <Wrapper img={props.img}>
          <Container className="spacing">
            <Text className="spacing">
              <div className="">
                <h1 className="title">{props.title}</h1>
                <p className="subheader tan">{props.subheader}</p>
              </div>
            </Text>
          </Container>
        </Wrapper>
      </BannerGrid>
    </div>
  );
}
