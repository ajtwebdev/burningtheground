import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Container, FlexMobileOpp, Section } from "../layoutComponents";
import styled from "styled-components";
import { ButtonPrimary } from "../buttons";

const Wrapper = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/hero.webp"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  color: "var(--txt-light)",
  border: "none",
  padding: "3px",
};

export default function FaqFeatured(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What makes project landscape different from other Calgary
                      landscape contractors?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Project landscape is unique in our aim to work with customers
                  both residential and commercial. From first contact we can
                  help you achieve your goal through our virtually unmatched
                  process; we can complete any size project big or small and
                  stay on time and within budget.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What is the best way to get started?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Booking a free consultation is the best way to get started. We
                  can be reached by phone or email and will answer you within 24
                  hours of point of contact. This will provide an opportunity
                  for you to sit down with one of our landscape consultants to
                  discuss your ideas and project in detail.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Do you offer a warranty?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Project landscape offers a full warranty on all hardscapes and
                  softscapes. Our Ironclad warranty program is virtually
                  unmatched.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Is your company licensed and insured?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We are fully licensed and insured, giving you peace of mind
                  when work is being carried out. We hold the highest insurance
                  the industry has to offer. We also are in good standings with
                  WCB, so all our employees are covered from injury while
                  working.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      I don’t know much about landscape materials or products,
                      can you help?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  With such a large selection of materials and products
                  available, we would recommend you look online at Pintrest or
                  houzz to get ideas. Also have a look at our website to gather
                  some more helpful info. Please contact our office for any
                  other information or links to help you get through the process
                  easier.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What types of services do you offer?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Project landscape offers a wide variety of services to meet
                  both residential and commercial properties. From property
                  maintenance, fertilizer and weed control programs, full
                  service parking lot maintenance, irrigation system services to
                  snow and ice management.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How much does landscaping typically cost?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  The cost of landscaping can vary widely depending on factors
                  such as the size of the area, the complexity of the design,
                  the types of materials used, and the region's labor costs.
                  Small residential projects, such as adding plants or a small
                  patio, can start from a few hundred dollars, while
                  larger-scale projects involving extensive design work,
                  hardscaping, and planting can range from several thousand to
                  tens of thousands of dollars or more.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Will my Project require a permit / who obtains the permit?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  As licensed landscape contractors, Project Landscape is happy
                  to help obtain needed permits as part of a project management
                  package.{" "}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton style={AccordionStyle}>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Do you have any certifications or affiliations with
                      professional organizations?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Project Landscape is Calgary's premier outdoor living company,
                  specializing in retaining walls and paving stone
                  installations. As certified experts in ICPI, Techo-Pro, and
                  Belgard, we guarantee high-quality craftsmanship and
                  compliance with industry standards. Trust us to transform your
                  outdoor space into a stunning and functional oasis.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <div className="spacing">
              <div>
                <p className="subheader tan">learn from the leaders</p>
                <h2 className="title">frequently asked questions</h2>
              </div>

              <p>
                At Project Landscape Ltd., our premier Calgary landscaping
                services will increase the value and overall aesthetic of your
                home. We use quality brands, and unique products to help keep
                your lawn healthy, and your home looking incredible. This means
                an overall better living experience for you and your family.
              </p>
              <ButtonPrimary href="/contact">get started</ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
