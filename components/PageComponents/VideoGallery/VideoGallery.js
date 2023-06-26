import React from "react";
import styled from "styled-components";
import { Section } from "components/layoutComponents";
import Image from "components/Image";

const Wrapper = styled.div``;

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  figure {
    div {
      img {
        object-fit: cover;
        max-height: 400px;
      }
    }
  }
`;

export default function VideoGallery({ title, videos }) {
  let width = "100%";
  let height = "100%";
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <Text className="spacing">
            <div>
              <h2 className="title">{title}</h2>
            </div>
          </Text>
          <Grid>
            {videos.map((video) => {
              return (
                <div style={{ position: "relative" }}>
                  <iframe
                    src={video.link}
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
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
}
