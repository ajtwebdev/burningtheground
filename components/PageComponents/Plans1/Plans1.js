import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";

const Text = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 90ch;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    font-size: var(--fs-2);
    text-transform: capitalize;
    &:before {
      content: "✓";
    }
  }
`;

const Img = styled.div`
  figure {
    div {
      box-shadow: 20px -20px 0px 1px var(--clr-accent);
      img {
        max-height: 600px;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }
`;

export default function Plans1({ subheader, title, text, image }) {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div>
            <p className="subheader accent">{subheader}</p>
            <h2 className="title bold">{title}</h2>
          </div>
        </Text>
        <Flex>
          <div className="spacing">
            <List className="bold">
              <li>signature “KICK STARTER CHALLENGE” method</li>
              <li>Weekly 1-2-1</li>
              <li>
                A powerful meditation written & audio record (a letter from your
                future self)
              </li>
              <li>24/7 Support</li>
            </List>
            <hr />
            <p>{text}</p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: `${text}`,
              }}
            ></div> */}
            <ButtonPrimary href="/contact">
              book a free 90-minute consultation &#8594;
            </ButtonPrimary>
          </div>
          <Img>
            <Image
              className="stretch img-right"
              alt={image.altText || ""}
              srcSet={image.srcSet}
              src={image.sourceUrl}
            />
          </Img>
        </Flex>
      </Container>
    </Section>
  );
}
