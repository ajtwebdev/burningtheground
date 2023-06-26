import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Actions } from "./layoutComponents";
import { ButtonPrimary, AnchorInline } from "./buttons";
import { getProverbData } from "../lib/api";

const Wrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(255, 255, 255, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`;

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--clr-accent);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 4em;
  border: 2px solid var(--clr-accent);
  border-radius: 10px;
`;
export default function Proverb() {
  const [proverbData, setProverbData] = useState({});
  useEffect(()=>{
    async function getProverb (){
      const data = await getProverbData();
      setProverbData(data?.generalSettings)
    }
    getProverb()
  },[])
  
  return (
    <Wrapper img={proverbData?.proverbImg}>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <h3 className="subheader italics">
              {proverbData?.proverb}
            </h3>
          </div>
        </Text>
      </Container>
    </Wrapper>
  );
}
