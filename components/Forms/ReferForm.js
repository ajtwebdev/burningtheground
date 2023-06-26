import React from "react";
import styled from "styled-components";

import { Section, Container, Flex } from "../layoutComponents";
import { Label, Input, Submit } from "./FormItems";

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
  label {
    text-transform: capitalize;
    margin-left: 2px;
  }
`;

export default function ReferForm(props) {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <form
            name="contact"
            className="spacing"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <Flex>
              <fieldset>
                <legend>Your Info</legend>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend>Your Friend/Family Info</legend>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter their full name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Phone:</Label>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter their phone"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter their email"
                    required
                  />
                </div>
              </fieldset>
            </Flex>
            <fieldset>
              <legend>What service(s) are you interested in?</legend>

              <div className="spacing">
                <h3 className="subheader">harscaping needs:</h3>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="paving-stones"
                    id="paving-stones"
                    value="paving stones"
                  />
                  <label for="paving">paving stones</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="retaining-walls"
                    id="retaining-walls"
                    value="retaining walls"
                  />
                  <label for="retaining-walls">retaining walls</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="garden-walls"
                    id="garden-walls"
                    value="garden walls"
                  />
                  <label for="garden-walls">garden walls</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="garden-edging"
                    id="garden-edging"
                    value="garden edging"
                  />
                  <label for="garden-edging">garden edging</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="concrete-curbing"
                    id="concrete-curbing"
                    value="concrete curbing"
                  />
                  <label for="concrete-curbing">concrete curbing</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="stairs"
                    id="stairs"
                    value="stairs"
                  />
                  <label for="stairs">stairs</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="seat-walls"
                    id="seat-walls"
                    value="seat walls"
                  />
                  <label for="seat-walls">seat walls</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="concrete-installation"
                    id="concrete-installation"
                    value="concrete installation"
                  />
                  <label for="concrete-installation">
                    concrete installation
                  </label>
                </div>
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">softscaping needs:</h3>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="artificial-turf"
                    id="artificial-turf"
                    value="artificial turf"
                  />
                  <label for="artificial-turf">artificial turf</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="irrigation"
                    id="irrigation"
                    value="irrigation"
                  />
                  <label for="irrigation">irrigation</label>
                </div>
                <div className="spacing-sm">
                  <input type="checkbox" name="sod" id="sod" value="sod" />
                  <label for="sod">sod</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="tree-planting"
                    id="tree-planting"
                    value="tree planting"
                  />
                  <label for="tree-planting">tree & shrub planting</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="mulch"
                    id="mulch"
                    value="mulch"
                  />
                  <label for="mulch">mulch & decorative rock</label>
                </div>
              </div>
              <hr />
              <div className="spacing">
                <h3 className="subheader">outdoor living needs:</h3>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="decks"
                    id="decks"
                    value="decks"
                  />
                  <label for="decks">decks</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="pergolas"
                    id="pergolas"
                    value="pergolas"
                  />
                  <label for="pergolas">pergolas</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="lighting"
                    id="lighting"
                    value="lighting"
                  />
                  <label for="lighting">landscape lighting</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="design"
                    id="design"
                    value="design"
                  />
                  <label for="design">landscape design</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="water-features"
                    id="water-features"
                    value="water features"
                  />
                  <label for="water-features">water features</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="fire-pits"
                    id="fire-pits"
                    value="fire pits"
                  />
                  <label for="fire-pits">fire pits</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="fences"
                    id="fences"
                    value="fences"
                  />
                  <label for="fences">fences</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="privacy-screens"
                    id="privacy-screens"
                    value="privacy screens"
                  />
                  <label for="privacy-screens">privacy screens</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="deck-railings"
                    id="deck-railings"
                    value="deck railings"
                  />
                  <label for="deck-railings">deck railings</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="outdoor-kitchens"
                    id="outdoor-kitchens"
                    value="outdoor kitchens"
                  />
                  <label for="outdoor-kitchens">outdoor kitchens</label>
                </div>
                <div className="spacing-sm">
                  <input
                    type="checkbox"
                    name="outdoor-furniture"
                    id="outdoor-furniture"
                    value="outdoor furniture"
                  />
                  <label for="outdoor-furniture">outdoor furniture</label>
                </div>
              </div>
            </fieldset>
            <Submit type="submit" id="submit" value="send" />
          </form>
        </FormWrapper>
      </Container>
    </Section>
  );
}
