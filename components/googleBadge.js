import React from "react";
import Image from "next/image";
import { FaStar, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const Wrapper = styled.a`
  padding: 0.8em;
  border-top: 6px solid green;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);
  background: var(--clr-light);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000000;
  text-decoration: none;
  p {
    margin-bottom: 0;
  }
  .header {
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    font-weight: var(--fw-400);
    text-transform: capitalize;
    line-height: 1.1;
    color: orange;
    display: flex;
    align-items: center;
    & > * + * {
      margin-left: 5px;
    }
  }

  .body--small {
    color: var(--txt-dark-secondary);
  }

  @media screen and (max-width: 36em) {
    display: none;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 5px;
  }
`;

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`;

const fontStyle = {
  color: "orange",
  fontSize: "20px",
};

const googleStyle = {
  fontSize: "50px",
};

export default function GoogleBadge() {
  return (
    <Wrapper
      target="_blank"
      href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
    >
      <Flex>
        <FcGoogle style={googleStyle} />
        <div className="">
          <p className="body--small">Google Rating</p>
          <div className="header">
            <span>4.8</span>
            <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars>
          </div>
          <p className="body--small">Based on 74 reviews</p>
        </div>
      </Flex>
    </Wrapper>
  );
}
