import React from "react";
import { Container, Section } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary } from "components/buttons";

const Wrapper = styled.div`
  color: var(--txt-light);
  background: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default function Cta3({ title, description, image }) {
  return (
    <Wrapper img={image.sourceUrl}>
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title bold">{title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            />
            <ButtonPrimary href="/contact">book us &#8594;</ButtonPrimary>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  );
}
