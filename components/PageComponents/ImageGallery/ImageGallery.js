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

export default function ImageGallery({ subheader, title, body, imageGallery }) {
  let width = "100%";
  let height = "100%";
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
          </Text>
          <Grid>
            {imageGallery.map((image) => {
              return (
                <Image
                  alt={image.altText || ""}
                  srcSet={image.srcSet}
                  src={image.src}
                  width={width}
                  height={height}
                />
              );
            })}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
}
