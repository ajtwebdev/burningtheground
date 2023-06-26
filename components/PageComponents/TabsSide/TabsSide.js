import React from "react";
import { Section, Container, Flex } from "../../layoutComponents";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "components/Image";

const Wrapper = styled.div`
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
  }

  @media screen and (max-width: 36em) {
    display: none;
  }
`;

const WrapperMobile = styled.div`
  @media screen and (min-width: 36em) {
    display: none;
  }
`;

const Text = styled.div`
  text-align: center;
`;

const ListBox = styled.div``;

const TabsWrapper = styled.div`
  .css-0 {
    display: flex;
  }
`;

const TabListWrapper = styled.div`
  .css-k008qs {
    flex-direction: column;

    @media screen and (max-width: 550px) {
      flex-direction: row;
    }
  }
`;
const PanelsWrapper = styled.div`
  padding: 2em;
  border: 3px solid var(--clr-tan);
  border-radius: var(--br);

  p {
    a {
      cursor: pointer;
      display: inline-block;
      font-family: var(--ff-alfa);
      font-size: var(--fs-sm);
      font-weight: var(--fw-button);
      font-style: italic;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--clr-accent);

      // this is for when an icon is used inside too
      div {
        display: flex;
        align-items: center;

        & > * + * {
          margin-left: 0;
          padding-left: 0;
        }
      }
      &:hover {
        color: var(--clr-accent);
      }
    }
  }
`;

export default function TabsSide({ title, tabsContent }) {
  let width = "100%";
  let height = "400px";
  return (
    <div>
      <Wrapper>
        <Section>
          <Container>
            <Text>
              <h2 className="title">{title}</h2>
            </Text>
            <TabsWrapper>
              <Tabs>
                <TabListWrapper>
                  <TabList>
                    {tabsContent.map((tab) => {
                      return <Tab>{tab.tabLabel}</Tab>;
                    })}
                  </TabList>
                </TabListWrapper>
                <PanelsWrapper>
                  <TabPanels>
                    {tabsContent.map((tab) => {
                      return (
                        <TabPanel>
                          <Flex>
                            <div className="spacing">
                              <h3 className="subheader accent">
                                {tab.tabTitle}
                              </h3>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${tab.tabBody}`,
                                }}
                              />
                              <ListBox>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: `${tab.tabList}`,
                                  }}
                                />
                              </ListBox>
                            </div>
                            <Image
                              alt={tab.tabImage.altText || ""}
                              srcSet={tab.tabImage.srcSet}
                              src={tab.tabImage.src}
                              width={width}
                              height={height}
                            />
                          </Flex>
                        </TabPanel>
                      );
                    })}
                  </TabPanels>
                </PanelsWrapper>
              </Tabs>
            </TabsWrapper>
          </Container>
        </Section>
      </Wrapper>
      <WrapperMobile>
        <Section>
          <Container>
            <Flex>
              {tabsContent.map((tab) => {
                return (
                  <Flex>
                    <div className="spacing">
                      <h3 className="subheader accent">{tab.tabTitle}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${tab.tabBody}`,
                        }}
                      />
                      <ListBox>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${tab.tabList}`,
                          }}
                        />
                      </ListBox>
                    </div>
                    <Image
                      alt={tab.tabImage.altText || ""}
                      srcSet={tab.tabImage.srcSet}
                      src={tab.tabImage.src}
                      width={width}
                      height={height}
                    />
                  </Flex>
                );
              })}
            </Flex>
          </Container>
        </Section>
      </WrapperMobile>
    </div>
  );
}
