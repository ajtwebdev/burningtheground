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
  Flex,
} from "../../layoutComponents";

const Wrapper = styled.div`
  background: url("/shows.jpg"), rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 70ch;
  h2 {
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`;

const ShowItem = styled.div`
  h3 {
    color: #fff;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
  }
  figure {
    div {
      img {
      }
    }
  }
`;

export default function Shows({ title, description, set }) {
  let width = "auto";
  let height = "600px";
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <Text className="spacing">
            <h2 className="title bold">{title}</h2>
            <p>
              {description}{" "}
              <ButtonInline href="/contact">Contact us!</ButtonInline>
            </p>
          </Text>
          <Grid className="spacing">
            {set.map((show) => {
              return (
                <Flex>
                  <Image
                    alt={show.image.altText || ""}
                    srcSet={show.image.srcSet}
                    src={show.image.src}
                    width={width}
                    height={height}
                  />
                  <div className="">
                    <p className="caps italics">{show.date}</p>
                    <h3 className="subheader accent">{show.name}</h3>
                  </div>
                </Flex>
              );
            })}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
}
