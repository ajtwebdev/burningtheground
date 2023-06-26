import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container, Section } from "../layoutComponents";
import Link from "next/link";
import { ButtonPrimary } from "../buttons";

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  margin-bottom: var(--spacer);
`;

const WrapperDark = styled.div`
  background: var(--clr-accent);
  margin-bottom: var(--spacer);
  padding-top: 2em;
  padding-bottom: 2em;
`;

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`;

const Item = styled.div`
  position: relative;
  border-top: 6px solid var(--clr-accent);
  .service-img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }
  h3 {
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    color: var(--txt-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--clr-dark);
  }

  &:hover {
    .overlay {
      opacity: 0.8;
      z-index: 2;
    }
    h3 {
      z-index: 3;
    }
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
    text-transform: uppercase
    text-decoration: none;
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    color: var(--txt-light);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    text-align: center;

    &:hover {
      color: var(--txt-light);
      z-index: 3;
    }
`;

const ServiceBox = (props) => {
  return (
    <Item>
      <Image
        className="service-img"
        height={100}
        width={600}
        src={props.src}
        alt={props.alt}
      />
      <StyledLink className="upper" href={props.href}>
        {props.text}
      </StyledLink>
      <div className="overlay"></div>
    </Item>
  );
};

export default function AllServicesBanner() {
  return (
    <Section className="spacing-lg">
      <Container>
        <Text>
          {/* <p className="subheader accent">find the service you need</p> */}
          <h2 className="title">
            take a closer look at our calgary landscaping services
          </h2>
        </Text>
      </Container>
      <Container className="spacing">
        <h3 className="subheader accent center">
          popular hardscaping services
        </h3>
        <GridAuto>
          <ServiceBox
            src="/calgary-pavers.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/patio-surfaces"
            text="pavers"
          />
          <ServiceBox
            src="/retaining-walls-landscaper-calgary.png"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/retaining-walls"
            text="retaining walls"
          />
          <ServiceBox
            src="/garden-walls-calgary-landscaping.png"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/garden-walls"
            text="garden walls"
          />
          <ServiceBox
            src="/garden-walls-calgary-landscaper.png"
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/garden-bed-edging"
            text="edging"
          />
          <ServiceBox
            src="/calgary-curbing.png"
            alt="calgary landscaping services"
            href="/concrete-curbing"
            text="curbing"
          />
          <ServiceBox
            src="/calgary-stairs.png"
            alt="calgary landscaping services"
            href="/staircases-stepping-stones"
            text="stairs & stepping stones"
          />
          <ServiceBox
            src="/seat-walls-landscaper-calgary.png"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/seating"
            text="seat walls"
          />
          <ServiceBox
            src="/calgary-concrete.jpg"
            alt="calgary landscaping services"
            href="/residential-services/concrete-installations"
            text="concrete"
          />
          <ServiceBox
            src="/water-mgmt-calgary-landscaping.webp"
            alt="calgary landscaping services"
            href="/residential-services/hardscaping/water-management"
            text="water mgmt"
          />
        </GridAuto>
      </Container>
      <WrapperDark>
        <Container>
          <h3 className="subheader light center">
            popular softscaping services
          </h3>
          <GridAuto>
            <ServiceBox
              href="/residential-services/landscape-construction/artificial-turf"
              alt="calgary landscaping services"
              src="/turf-calgary-landscaping.webp"
              text="artificial turf"
            />
            <ServiceBox
              href="/residential-services/irrigation-landscape-lighting"
              alt="calgary landscaping services"
              src="/calgary-landscaping-irrigation.webp"
              text="irrigation"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/sod-installation"
              alt="calgary landscaping services"
              src="/sod-landscaper.jpg"
              text="sod"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/tree-shrub-planting"
              alt="calgary landscaping services"
              src="/tree-landscaping-calgary.jpg"
              text="shrubs & trees"
            />
            <ServiceBox
              href="/residential-services/landscape-construction/mulches-decorative-rock"
              alt="calgary landscaping services"
              src="/mulch-landscaper-calgary.jpg"
              text="mulch & rock"
            />
          </GridAuto>
        </Container>
      </WrapperDark>
      <Container>
        <h3 className="subheader center accent">
          popular outdoor living services
        </h3>
        <GridAuto>
          <ServiceBox
            src="/calgary-decks.jpg"
            alt="calgary landscaping services"
            href="/decks-calgary"
            text="decks"
          />
          <ServiceBox
            src="/pergola-2.jpg"
            alt="calgary landscaping services"
            href="/gazebos-pergolas"
            text="pergolas"
          />
          <ServiceBox
            src="/lighting-calgary-landscaper.jpg"
            alt="calgary landscaping services"
            href="/landscape-lighting-services-calgary"
            text="lighting"
          />
          <ServiceBox
            src="/calgary-lighting.jpg"
            alt="calgary landscaping services"
            href="/landscape-design"
            text="design"
          />
          <ServiceBox
            src="/water-features-2.jpg"
            alt="calgary landscaping services"
            href="/residential-services/water-features"
            text="water features"
          />
          <ServiceBox
            src="/fire-pits-2.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/fire-pits-fire-places"
            text="fire pits"
          />
          <ServiceBox
            src="/fence-landscaping-calgary.jpg"
            alt="calgary landscaping services"
            href="/fence-contractor-in-calgary"
            text="fences"
          />
          <ServiceBox
            src="/screens-landscaper.png"
            alt="calgary landscaping services"
            href="/privacy-screens"
            text="privacy screens"
          />
          <ServiceBox
            src="/calgary-landscaping-railings.jpg"
            alt="calgary landscaping services"
            href="/railings"
            text="deck railings"
          />
          <ServiceBox
            src="/calgary-outdoor-kitchens.jpg"
            alt="calgary landscaping services"
            href="/residential-services/landscape-construction/outdoor-kitchens"
            text="outdoor kitchens"
          />
          <ServiceBox
            src="/outdoor-furniture-landscaping-calgary.jpg"
            alt="calgary landscaping services"
            href="/residential-services/outdoor-living/outdoor-furniture"
            text="outdoor furniture"
          />
        </GridAuto>
      </Container>
    </Section>
  );
}
