import React from "react";
import styled from "styled-components";
import { Section, Container } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";

const Text = styled.div`
  text-align: center;
  max-width: 140ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  p {
    margin-left: auto;
    margin-right: auto;
    max-width: 90ch;
    ul {
      padding: 2em;
      width: 75%;
      li {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

const Image = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// const StyledImg = styled(GatsbyImage)`
//   width: 80%;
//   max-height: 450px;
// `

export default function ComponentC({ subheader, title, body, image }) {
  let width = "100%";
  let height = "400px";
  return (
    <Section>
      <Container className="spacing center ">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
        </Text>
        <Image>
          {image ? (
            <img
              width={width}
              height={height}
              src={image.sourceUrl}
              alt={image.altText || ""}
              srcSet={image.srcSet}
            />
          ) : null}
        </Image>
      </Container>
    </Section>
  );
}

// const ComponentC = ({ subheader, title, body, image }) => {
//   let width = '100%';
//   let height = 'auto';
//   return (
//     <div>
//       <p>{subheader}</p>
//       <h2>{title}</h2>
//       {body ? <div dangerouslySetInnerHTML={{ __html: body }} /> : null}
//       {image ? (
//         <img width={width} height={height} src={image.sourceUrl} alt={image.altText || ''} srcSet={image.srcSet} />
//       ) : null}
//     </div>
//   );
// };

// export default ComponentC;
