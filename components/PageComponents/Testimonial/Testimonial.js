import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Section } from "components/layoutComponents";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ReviewWrapper = styled.div`
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  text-align: center;

  h3,
  p {
    max-width: 90ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Wrapper = styled.div`
  background: url("/testimonial-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 24px;
  }
`;

const FlexStars = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 2px;
  }

  & > * {
    color: var(--clr-accent);
  }
`;

const ReviewBox = (props) => {
  return (
    <ReviewWrapper className="">
      {/* <h3 className="subheader">{props.title}</h3> */}
      <p className="italics subheader">"{props.review}"</p>
      <p className="bold caps">{props.name}</p>
      <FlexStars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </FlexStars>
    </ReviewWrapper>
  );
};

export default function Testimonial({ title, testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Section>
        <Container>
          <SliderWrapper>
            <Slider {...settings}>
              <ReviewBox
                title="I'm focused and motivated in the face of adversity"
                review="Awesome as ever, we had a great night ~ Thanks for putting us on the G L xo"
                name="Sharon L."
              />
              <ReviewBox
                title="I'm focused and motivated in the face of adversity"
                review="My boys had so much fun dancing on stage with you. So great to be able to share Burning the Ground with them at a family friendly event. You guys are awesome!"
                name="Marlyse O."
              />
              <ReviewBox
                title="real results happened fast for me"
                review="Thanks for letting me sit in on 'Rio'! That was a great show!"
                name="Pat M."
              />
              <ReviewBox
                title="her wisdom elevated my mindset"
                review="That dance floor just wasn't big enough!!!"
                name="Denise G."
              />
              {/* {testimonials.map(testimonial => {
                return (
                  <ReviewBox
                    title={testimonial.testimonialTitle}
                    review={testimonial.testimonialBody}
                    name={testimonial.testimonialName}
                  />
                )
              })} */}
            </Slider>
          </SliderWrapper>
        </Container>
      </Section>
    </Wrapper>
  );
}
