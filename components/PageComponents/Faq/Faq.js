import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Container, FlexMobileOpp, Section } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";

const Wrapper = styled.div`
  background: url("/faq-bg.png"), rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;

const AccordionStyle = {
  background: "var(--clr-dark-secondary)",
  borderRadius: "var(--br)",
  color: "var(--txt-light)",
  border: "none",
  padding: "3px",
};

export default function FaqFeatured({ title, body, questions }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              {questions.map((item) => {
                return (
                  <AccordionItem style={AccordionStyle}>
                    <h2>
                      <AccordionButton style={AccordionStyle}>
                        <Box
                          className="subheader"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      dangerouslySetInnerHTML={{
                        __html: `${item.answer}`,
                      }}
                    />
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="spacing">
              <div>
                <p className="subheader tan">
                  adriana's answers to the most common
                </p>
                <h2 className="title">frequently asked questions</h2>
              </div>
              <p>
                {body ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${body}`,
                    }}
                  />
                ) : null}
              </p>
              <ButtonPrimary href="/contact">
                book a free consultation
              </ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
