import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "../layoutComponents";
import { ButtonPrimary } from "../buttons";
import Image from "next/image";

const Text = styled.div``;

const Img = styled.div`
  figure {
    div {
      box-shadow: 20px 20px 0px 1px var(--clr-accent);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

export default function ImageRight() {
  let width = "100%";
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader accent">ask us how</p>
              <h2 className="title">become a christian</h2>
            </div>
            <p>
              For indeed the gospel was preached to us as well as to them; but
              the word which they heard did not profit them, not being mixed
              with faith in those who heard it. Hebrews 4:2
            </p>

            <ButtonPrimary href="/contact">contact us</ButtonPrimary>
          </Text>
          <Img>
            <Image
              alt="become christian"
              src="/squirrel.jpg"
              width={400}
              height={600}
            />
          </Img>
        </Flex>
      </Container>
    </Section>
  );
}
