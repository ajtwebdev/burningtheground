import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary, ButtonInline } from "../../buttons";
import {
  Actions,
  Container,
  FlexMobileOpp,
  Section,
} from "../../layoutComponents";

const TextTop = styled.div`
  text-align: center;

  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
`;

const Text = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 4em auto 4em;
  grid-template-columns: 2em auto 2em;
`;

const Bg = styled.div`
  background: var(--clr-accent);
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;

const Video = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  z-index: 2;
  box-shadow: var(--shadow-light);
`;

export default function Video1({ subheader, title, text, video }) {
  return (
    <Section>
      <div className="spacing-lg">
        <TextTop>
          <h2 className="subheader accent">{subheader}</h2>
          <h3 className="title">{title}</h3>
        </TextTop>
        <FlexMobileOpp className="spacing">
          <Text>
            <Container className="spacing">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${text}`,
                }}
              ></div>

              <Actions>
                <ButtonSecondary href="/videos">video gallery</ButtonSecondary>
                <ButtonPrimary href="/contact">
                  book us for your set
                </ButtonPrimary>
              </Actions>
            </Container>
          </Text>

          <Grid>
            <Bg />
            <Video style={{ position: "relative" }}>
              <iframe
                src={video}
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Burning The Ground"
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "600px",
                }}
              />
            </Video>
          </Grid>
        </FlexMobileOpp>
      </div>
    </Section>
  );
}
