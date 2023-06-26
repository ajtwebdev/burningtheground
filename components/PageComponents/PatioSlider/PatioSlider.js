import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons";
import { Actions, Container, HeroBannerPadding } from "../../layoutComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "./PatioSlider.module.scss";
import Image from "next/image";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
};

export default function PatioSlider({ title }) {
  return (
    <div className={styles.wrapper}>
      <div className="heroBannerPadding" />
      <div className={styles.heroGrid}>
        <div className={styles.heroWrapper}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/patio-slider-1-1.webp"
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content1} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h1 className="title">
                    Calgary's largest residential paving stone installer{" "}
                  </h1>
                  <p className="subheader tan">The confidence to stand out </p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/patio-slider-2.png"
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content2} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">
                    Patios, Walkways, Pool Decks, Driveays
                  </h2>
                  <p className="subheader tan">A style for every home</p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className={styles.content}>
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/patio-slider-3-_1_-2-2.webp"
                  src="https://res.cloudinary.com/di7j408eq/image/upload/v1685516535/outdoor-living-slider_1_nsnsnr.webp"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content3} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">take a step outdoors</h2>
                  <p className="subheader tan">
                    Expand your outdoor living space to its full potential
                  </p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.heroBottomText}>
          <Container>
            <p>
              Looking for Calgary hardscaping companies or patio builders? Look
              no further than Project Landscape. Our team of experts is here to
              help you create the outdoor living space of your dreams. With our
              experience and expertise in hardscaping and patio construction, we
              can transform your backyard into a beautiful and functional oasis.
              Trust Project Landscape to bring your vision to life. Contact us
              today to get started on your project.
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
}
