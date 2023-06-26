import React from "react"
import styled from "styled-components"
import { ButtonSecondaryLight } from "../Buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../LayoutComponents"

const Wrapper = styled.div`
  background: var(--clr-accent);

  .img {
     box-shadow: 20px 20px 0px 1px var(--clr-accent);
  max-height: 450px;
  }
`

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`


export default function ImageLeftDark(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Image className="img" src={props.img} alt={props.alt} height={100} widht={100} />
            <Text className="spacing">
              <div>
                <p className="subheader">{props.subheader}</p>
                <h2 className="title">{props.title}</h2>
              </div>
              <p>{props.body}</p>
              <ButtonSecondaryLight href={props.to}>
                {props.button}
              </ButtonSecondaryLight>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
