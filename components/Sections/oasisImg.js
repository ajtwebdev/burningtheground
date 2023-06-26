import React from "react";
import styled from "styled-components";
import { ButtonInline, ButtonPrimary } from "../buttons";
import { Container, Flex, Section } from "../layoutComponents";
import Image from "next/image";

const Wrapper = styled.div``;

const Text = styled.div``;

const ImgStyle = {
  boxShadow: "20px 20px 0px 1px var(--clr-accent)",
  maxHeight: "450px",
};

export default function OasisImg(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing">
              <div>
                <p className="subheader">{props.subheader}</p>
                <h2 className="title">{props.title}</h2>
              </div>
              <p>
                Imagine stepping out into a perfect{" "}
                <ButtonInline href="/residential-services/outdoor-living">
                  backyard oasis
                </ButtonInline>
                . A perfect place for relaxing,{" "}
                <ButtonInline href="/residential-services/landscape-construction/outdoor-kitchens">
                  entertaining
                </ButtonInline>{" "}
                and everything in between. Get the ease of a single landscape
                provider, who understands and can help with all your outdoor
                needs. Use a proven{" "}
                <ButtonInline href="/about">
                  Calgary landscape company
                </ButtonInline>{" "}
                that has mastered how to bring your outdoor dreams to life. From
                creative{" "}
                <ButtonInline href="/residential-services/softscaping">
                  softscapes
                </ButtonInline>{" "}
                to the most lucrative{" "}
                <ButtonInline href="/residential-services/hardscaping">
                  hardscapes
                </ButtonInline>
                , through an integrated approach, your landscape project can
                benefit from our seamless landscaping process. A company of
                professional landscape designers will take your project from
                concept to completion, by carefully listening to your ideas,
                goals and how you dream of using your outdoor space.
              </p>
              <ButtonPrimary href={props.to}>{props.button}</ButtonPrimary>
            </Text>
            <Image
              height={100}
              width={400}
              style={ImgStyle}
              src="/calgary-landscaping-oasis.png
"
              alt="best landscaper calgary, AB"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
}
