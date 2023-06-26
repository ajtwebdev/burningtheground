import React from "react";
import styled from "styled-components";
import { ButtonPrimaryDark } from "components/buttons";
import { Container, Flex, Section } from "components/layoutComponents";
import Image from "components/Image";

const Wrapper = styled.div`
  background: var(--clr-accent);
`;

const Text = styled.div`
  color: var(--txt-light);
  padding: 2em 0;

  .subheader {
    color: var(--txt-dark-secondary);
  }
`;

const Img = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0 53%, 0% 0%);

  figure {
    height: 100%;
    padding: 0;
    margin: 0;
    div {
      height: 100%;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;

  @media screen and (max-width: 57em) {
    grid-template-columns: 1fr;
  }
`;

const Inner = styled.div`
  a {
    color: var(--txt-light);
  }
`;

export default function Cta1({ subheader, title, body, image }) {
  return (
    <Wrapper>
      <Grid>
        <Img>
          <Image
            className="stretch"
            alt={image.altText}
            srcSet={image.srcSet}
            height="100%"
          />
        </Img>
        <Text>
          <Container className="spacing">
            <div>
              <p className="subheader">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <Inner
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
            ) : null}

            <ButtonPrimaryDark href="/contact">
              book us &#8594;
            </ButtonPrimaryDark>
          </Container>
        </Text>
      </Grid>
    </Wrapper>
  );
}
