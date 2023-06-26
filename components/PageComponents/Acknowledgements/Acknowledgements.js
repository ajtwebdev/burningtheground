import React from "react";
import { Container, Section } from "../../layoutComponents";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("http://www.wp-content.shelterinplace3.ca/wp-content/uploads/2023/03/IMGP2868-scaled-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6em 0;
`;

const Item = styled.div`
  padding: 4em;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  div {
    ul {
      list-style-type: none;
      text-align: center;
    }
  }
`;

export default function Acknowledgements({ title, list }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Item className="spacing">
            <h2 className="title accent">{title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: `${list}`,
              }}
            ></div>
          </Item>
        </Container>
      </Section>
    </Wrapper>
  );
}
