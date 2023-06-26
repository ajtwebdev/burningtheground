import React from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "../../Image";

const Wrapper = styled.div`
  background: var(--clr-dark);
`;

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: -20px 20px 0px 1px var(--clr-tan);
// `

const Img = styled.div`
  figure {
    div {
      box-shadow: -5px -5px 0px 1px var(--clr-accent);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

export default function ImageLeftDark({
  subheader,
  title,
  body,
  image,
  button,
  link,
}) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Img>
              <Image
                className="stretch"
                alt={image.altText || ""}
                srcSet={image.srcSet}
              />
            </Img>
            <Text className="spacing">
              <div>
                <p className="subheader accent">{subheader} </p>
                <h2 className="title">{title}</h2>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
              {button && link ? (
                <ButtonPrimary href={link}>{button}</ButtonPrimary>
              ) : (
                <ButtonPrimary href="/contact">contact us</ButtonPrimary>
              )}
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
