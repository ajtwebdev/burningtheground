import React from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";

const Text = styled.div``;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: -20px 20px 0px 1px var(--clr-accent);
// `

const ImgLeft = styled.div`
  figure {
    div {
      box-shadow: -5px 5px 0px 1px var(--clr-light);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

export default function ImageLeft({
  subheader,
  title,
  body,
  image,
  button,
  link,
}) {
  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          <ImgLeft>
            <Image
              className="stretch img-left"
              alt={image.altText || ""}
              srcSet={image.srcSet}
              src={image.sourceUrl}
            />
          </ImgLeft>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            {button && link ? (
              <ButtonPrimary href={link}>{button}</ButtonPrimary>
            ) : (
              <ButtonPrimary href="/contact">contact us</ButtonPrimary>
            )}
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  );
}
