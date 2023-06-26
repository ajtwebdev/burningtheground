import Image from "../../Image";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonPrimaryDark, ButtonInline } from "../../buttons";
import {
  Actions,
  Container,
  FlexMobileOpp,
  GridThree,
  Section,
} from "../../layoutComponents";

const Text = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 70ch;

  .subheader {
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 58em) {
    grid-template-columns: 1fr;
  }
`;

const MemberItem = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    color: #fff;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
  }
  h3 {
    padding-right: 2em;
  }

  h4 {
    padding-right: 4em;
  }
  figure {
    div {
      img {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        border: 2px solid var(--clr-accent);
      }
    }
  }
`;

const Description = styled.div`
  padding-right: 6em;
`;

export default function Members({ member }) {
  let width = "auto";
  let height = "600px";
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <h2 className="title bold">
            take a time machine{" "}
            <span className="italics accent">back to the 80s</span> with
          </h2>
          <p className="subheader">burning the ground</p>
          <p>
            From the opening chords to the final note, our band's passion for
            the music of the 80s is palpable. You'll be transported back in
            time, surrounded by the vibrant neon lights and infectious beats
            that defined the era. Feel the energy build as the crowd erupts with
            excitement, eagerly anticipating the first chord that will ignite
            the night.
          </p>
        </Text>
        <Grid className="spacing">
          {member.map((item) => {
            return (
              <MemberItem className="spacing center">
                <Image
                  alt={item.image.altText || ""}
                  srcSet={item.image.srcSet}
                  src={item.image.src}
                  width={width}
                  height={height}
                />
                <div className="spacing">
                  <h4 className="subheader italics accent">{item.title}</h4>
                  <h3 className="title caps">{item.name}</h3>
                </div>
                {item.description ? (
                  <Description
                    dangerouslySetInnerHTML={{
                      __html: `${item.description}`,
                    }}
                  />
                ) : null}
              </MemberItem>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
