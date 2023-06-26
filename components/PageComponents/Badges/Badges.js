import React from "react";
import { Container, Section } from "../../layoutComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "100px",
  width: "100%",
};

const Wrapper = styled.div`
  .slick-list {
    div {
      img {
        height: 150px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  h2 {
    // text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
    //   0 -18px 40px #f00;
  }
`;

const Item = styled.div`
  text-align: center;
`;

export default function Badges({ title }) {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };
  return (
    <Section>
      <Wrapper className="spacing">
        {title ? <h2 className="title center">{title}</h2> : null}
        <Slider {...settings}>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
          <Item>
            <p className="caps">song name</p>
            <p className="body--small bold caps accent">artist</p>
          </Item>
        </Slider>
      </Wrapper>
    </Section>
  );
}
