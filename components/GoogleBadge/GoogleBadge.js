import React from "react";
import Image from "next/image";
import { FaStar, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import styles from "./GoogleBadge.module.scss";

const fontStyle = {
  color: "orange",
  fontSize: "20px",
};

const googleStyle = {
  fontSize: "50px",
};

export default function GoogleBadge() {
  return (
    <a
      className={styles.wrapper}
      target="_blank"
      href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
    >
      <div className={styles.flex}>
        <FcGoogle style={googleStyle} />
        <div className="">
          <p className="body--small">Google Rating</p>
          <div className={styles.header}>
            <span>4.8</span>
            <div className={styles.flexStars}>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </div>
          </div>
          <p className="body--small">Based on 74 reviews</p>
        </div>
      </div>
    </a>
  );
}
