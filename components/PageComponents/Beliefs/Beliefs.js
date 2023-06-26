import React from "react";
import { Container, Flex, Section } from "../../layoutComponents";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("http://www.wp-content.shelterinplace3.ca/wp-content/uploads/2023/03/IMGP7144-scaled-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
`;

const Item = styled.div`
  padding: 4em;
  background: rgba(255, 255, 255, 0.8);
`;

const TextItem = styled.div`
  text-align: center;
`;

export default function Beliefs({ statements }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Item className="spacing">
            <h2 className="title accent center">we believe:</h2>
            <Flex>
              <div className="spacing">
                {statements.map((item) => {
                  return (
                    <TextItem>
                      <div
                        className="bold accent italics"
                        dangerouslySetInnerHTML={{
                          __html: `${item.statement}`,
                        }}
                      />
                      <p>{item.author}</p>
                    </TextItem>
                  );
                })}
                {/* <TextItem>
                  <h3 className="bold accent italics">
                    in God, the one God who manifests Himself to us as three
                    persons, God the Father, God the Son (Jesus Christ), and God
                    the Holy Spirit.
                  </h3>
                  <p>
                    ~ (Genesis 1:26-27, Deuteronomy 6:4, John 10:29-29, John
                    14:1 & 6-21, ! John 5:7)
                  </p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    that God created all things, and He is omnipotent,
                    omniscient, omnipresent in our lives, and in all His
                    creation.
                  </h3>
                  <p>
                    ~ (Psalm 19:1-4, Colossians 1:16, Psalm 139:1-4, Psalm
                    147:4-5 & 2, Chronicles 19:6, Proverbs 15:3)
                  </p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    that the Holy Scriptures consist of the Old and New
                    Testaments, are inerrant in their original texts, having
                    been inspired by the Holy Spirit to Godly men of old.
                  </h3>
                  <p>
                    ~ (1 Thessalonians 1:5, 2 Peter 1:21, 2 Timothy 3:16) The
                    best translations in English for us are the King James and
                    New King James versions.
                  </p>
                </TextItem>
              </div>
              <div className="spacing">
                <TextItem>
                  <h3 className="bold accent italics">
                    that God the Father, the first person of the Godhead, who
                    cannot look upon evil, gave His only begotten son to die for
                    us save us from our sin and death.
                  </h3>
                  <p>~ (Habakkuk, !:3, John 3:15 16, Romans 5:6-8)</p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    that Jesus Christ, the second person of the Godhead, has
                    been the intercessor for man and is the creator of all
                    things – (John 1:1-4) became man and God having been born of
                    a virgin (Mary) and conceived of the Holy Spirit, – (Matthew
                    1:18) died for our sin (man’s) and rose again bodily into
                    Heaven, and resides there currently as our High Priest and
                    Intercessor – (Hebrews 4:14-16, Romans 6:4-14) He will come
                    again, in person, a pretribulation coming to establish His
                    kingdom and reign on earth for a thousand years
                  </h3>
                  <p>
                    ~ (I Cor. 15:51-53; 1 Thess. 4:14-17; Titus 2:13; 1 John
                    3:2-3)
                  </p>
                </TextItem>
                <TextItem>
                  <h3 className="bold accent italics">
                    that Man was created in the image of God, but that after the
                    fall of Adam, to this day man is born into Sin
                  </h3>
                  <p>~ (Psalm 51:5, Romans 3:23, Romans 5:19, Ephesians 2:3)</p>
                </TextItem> */}
              </div>
            </Flex>
          </Item>
        </Container>
      </Section>
    </Wrapper>
  );
}
