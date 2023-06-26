import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ButtonUnderline, ButtonInline } from "../buttons";
import { Container, Section } from "../layoutComponents";
import Link from "next/link";

const device = {
  md: "48em",
};

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 140px auto 2em;
  grid-template-rows: 2em auto 2em;
`;

const List = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }

  & > * {
    justify-self: center;
    align-self: center;
  }
`;

const Bg = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  z-index: 1;
  background: var(--clr-accent);
`;

const Item = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);

  div {
    padding: 1em;
  }

  &:hover {
    color: var(--txt-light);
  }
`;

export default function MainServicesLinks() {
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing">
            <div>
              {/* <p className="subheader accent">find the services you need</p> */}
              <h2 className="title">
                bring your landscaping calgary project to life
              </h2>
            </div>
            <p>
              Your home is your pride and joy, and we are the{" "}
              <ButtonInline href="/">landscape professionals</ButtonInline> who
              can help you maintain its outdoor beauty. Increasing your
              property's value and making your yard the envy of the block,
              <ButtonInline href="/about">Project Landscape</ButtonInline>{" "}
              ensures that your landscaping needs are met. From{" "}
              <ButtonInline href="/residential-services/irrigation-landscape-lighting">
                irrigation
              </ButtonInline>
              , seasonal clean-up,{" "}
              <ButtonInline href=".residential-services/hardscaping/">
                construction
              </ButtonInline>{" "}
              and{" "}
              <ButtonInline href="/residential-services">
                more services
              </ButtonInline>
              , we are the Calgary Landscaping experts you can trust for all
              your residential landscaping needs
            </p>
          </Text>
        </Container>
        <Grid>
          <List>
            <Item>
              <Image
                height={600}
                width={600}
                src="/hardscaping-calgary.jpg"
                alt="calgary hardscaping services"
              />
              <div>
                <h3 className="subheader">hardscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/hardscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </Item>
            <Item>
              <Image
                height={600}
                width={600}
                src="/softscaping-calgary.jpg"
                alt="calgary softscaping services"
              />
              <div>
                <h3 className="subheader">softscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/softscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </Item>
            <Item>
              <Image
                height={600}
                width={600}
                src="/outdoor-living-calgary.jpg"
                alt="outdoor landscaping services calgary"
              />
              <div>
                <h3 className="subheader">outdoor living</h3>
                <ButtonUnderline
                  className="service-button"
                  href="/residential-services/outdoor-living"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </Item>
          </List>
          <Bg />
        </Grid>
      </div>
    </Section>
  );
}
