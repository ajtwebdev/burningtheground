import React from "react";
import { Container, Section } from "../layoutComponents";
import styled from "styled-components";
import { ButtonSecondaryLight } from "../buttons";
import styles from "./Cta3.module.scss";

export default function Cta3() {
  return (
    <div className={styles.wrapper}>
      <section>
        <div className="container">
          <div className={styles.text}>
            <div className="spacing">
              <h2 className="title">your outdoor oasis is just a click away</h2>
              <ButtonSecondaryLight href="/contact">
                get started &#8594;
              </ButtonSecondaryLight>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
