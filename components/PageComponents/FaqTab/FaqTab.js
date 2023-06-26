import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container, FlexMobileOpp, Section } from "../../layoutComponents";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons";

const Wrapper = styled.div`
  .css-k008qs {
    justify-content: center;
    flex-direction: column;
  }

  .css-5wl5ud {
    font-family: var(--ff-alfa);
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: var(--clr-light);
    border: none;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .css-5wl5ud[aria-selected="true"],
  .css-5wl5ud[data-selected] {
    color: var(--clr-tan);
    border-color: currentcolor;
    border-bottom: 3px solid var(--clr-tan);
  }

  css-0 {
    padding: 2em;
    border: 1px solid var(--clr-tan);
    border-radius: var(--br);

    @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const TabWrapper = styled.div`
  padding: 2em;
  border: 3px solid var(--clr-tan);
  border-radius: var(--br);
`;

const AccordionStyle = {
  color: "var(--txt-dark)",
  border: "none",
  padding: "3px",
  cursor: "pointer",
};

export default function FaqTab({ tabsContent, title }) {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="title">{title}</h2>
          <TabWrapper>
            <Tabs>
              <TabList>
                {tabsContent.map((tab) => {
                  return <Tab>{tab.tabLabel}</Tab>;
                })}
              </TabList>

              <TabPanels>
                {tabsContent.map((tab) => {
                  return (
                    <TabPanel>
                      <Accordion className="spacing">
                        {tab.questions.map((questionContent) => {
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
                                    {/* QUESTION */}
                                    {questionContent.question}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel
                                pb={4}
                                dangerouslySetInnerHTML={{
                                  __html: `${questionContent.answer}`,
                                }}
                              />
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </TabPanel>
                  );
                })}
              </TabPanels>
            </Tabs>
          </TabWrapper>
        </Container>
      </Section>
    </Wrapper>
  );
}
