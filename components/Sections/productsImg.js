import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonInline } from "../buttons";
import { Container, Flex, Section } from "../layoutComponents";
import Image from "next/image";

const Text = styled.div``;

const ImgStyle = {
  boxShadow: "20px 20px 0px 1px var(--clr-accent)",
  maxHeight: "450px",
};

export default function ProductsImg(props) {
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <h2 className="title">
                get the highest quality calgary landscaping materials
              </h2>
            </div>
            <p>
              As experts in the field of landscaping and{" "}
              <ButtonInline href="/residential-services/outdoor-living">
                outdoor
              </ButtonInline>{" "}
              renovations, we take pride in using only the highest quality
              landscaping materials to ensure that your property is not only
              visually appealing but also adds value to your home. From{" "}
              <ButtonInline href="/residential-services/irrigation-landscape-lighting">
                irrigation systems
              </ButtonInline>{" "}
              to seasonal clean-ups, construction projects, and other
              landscaping services, our team at Project Landscape in Calgary is
              dedicated to meeting your{" "}
              <ButtonInline href="/residential-services">
                residential landscaping
              </ButtonInline>{" "}
              needs with <ButtonInline href="/testimonials">trust</ButtonInline>{" "}
              and <ButtonInline href="/blog">expertise</ButtonInline>.
            </p>

            <ButtonPrimary href="/calgary-landscaping-materials">
              discover products
            </ButtonPrimary>
          </Text>
          <Image
            height={100}
            width={400}
            style={ImgStyle}
            src="/calgary-landscaping-selection-guide-1.jpg"
            alt="calgary landscaping materials"
          />
        </Flex>
      </Container>
    </Section>
  );
}
