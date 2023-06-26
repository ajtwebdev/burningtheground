import React from "react";
import styled from "styled-components";
import { ButtonPrimaryDark } from "./buttons";
import { Container, Flex, Section } from "./layoutComponents";
import Image from "next/image";

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 37, 4, 1) 0%,
    rgba(47, 184, 20, 1) 100%
  );
  color: var(--txt-light);
`;

const Text = styled.div``;

export default function PortfolioBanner() {
  let width = "400px";
  let height = "400px";

  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing ">
              <div>
                <p className="subheader">
                  explore the latest in landscape designs
                </p>
                <p className="title">your personal paradise starts here</p>
              </div>
              <ButtonPrimaryDark href="/portfolio">
                view our portfolio
              </ButtonPrimaryDark>
            </Text>
            {/* <Image
              src="/calgary-landscaping-contractor-1.jpg"
              alt="calgary landscaping contractor featured portfolio"
              className="stretch"
              width={400}
              height={400}
            /> */}
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
}
