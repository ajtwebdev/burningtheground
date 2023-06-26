import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../layoutComponents";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import FormFooter from "../Forms/FormFooter";
import Map from "../map";
import InstagramFeed from "../instagramFeed";
import { ButtonInline } from "../buttons";
import styles from "./Footer.module.scss";
import { StyleRegistry } from "styled-jsx";

const IconStyle = {
  color: "var(--clr-accent)",
};

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.footerWrapperTop}>
        <div className={styles.container}>
          <div className="container spacing">
            <center>
              <div className="spacing">
                <Image
                  width={300}
                  height={200}
                  src="/burning-logo.svg"
                  alt="calgary 80s band logo"
                />
              </div>
            </center>
            <hr />
            <div className={styles.flex}>
              <div className={styles.flex}>
                <div className="spacing">
                  <div className={styles.contacts}>
                    <h4 className="subheader">contact us</h4>
                    <ul>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="tel: 403-836-0849"
                        >
                          <div>
                            <FaPhone style={IconStyle} />
                          </div>
                          403-8360849
                        </a>
                      </li>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="mailto: burningtheground@shaw.ca"
                        >
                          <div>
                            <MdOutlineEmail style={IconStyle} />
                          </div>
                          burningtheground@shaw.ca
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.locations}>
                    <h4 className="subheader">locations</h4>
                    <ul>
                      <li>
                        Banff, AB, Canada · Edmonton, AB, Canada · Okotoks, AB,
                        Canada · Medicine Hat, AB, Canada · Vancouver, BC,
                        Canada · Calgary, AB, Canada · Red Deer, AB, Canada ·
                        Airdrie, AB, Canada · Canmore, AB, Canada · Lethbridge,
                        AB, Canada
                      </li>
                    </ul>
                  </div>
                  <div className={styles.socials}>
                    <h4 className="subheader">Follow us!</h4>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/burningtheground"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/facebook.svg"
                          alt="calgary 80s band facebook page"
                        />
                      </a>
                    </div>
                    <div>
                      <a target="_blank" href="#">
                        <Image
                          width={100}
                          height={100}
                          src="/socials/instagram.svg"
                          alt="calgary 80s band instagram"
                        />
                      </a>
                    </div>
                    <div>
                      <a target="_blank" href="#">
                        <Image
                          width={100}
                          height={100}
                          src="/socials/youtube.svg"
                          alt="calgary 80s band youtube"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pageLinks}>
                <h4 className="subheader">Quick Links</h4>
                <ul>
                  <li>
                    <Link className={styles.styledLink} href="/">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/about">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/set-list">
                      set list
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/photos">
                      photos
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/videos">
                      videos
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/contact">
                      book us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="subheader">email us</h4>
                <FormFooter />
              </div>
            </div>
            <hr />

            <div className={styles.copyright}>
              <ul>
                <li>Copyright&#169; {date}</li>
                <li>Burning The Ground</li>
                <li>All Rights Reserved</li>
                <li>
                  <Link className={styles.a} href="/terms-of-use">
                    terms of use
                  </Link>
                </li>
                <li>
                  <Link className={styles.a} href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.author}>
              <div className="container">
                <div>
                  <p>website by: </p>
                  <a target="_blank" href="https://www.aarontonner.com">
                    <Image
                      className="img"
                      src="/aaron-tonner-web-solutions-logo-white-white.svg"
                      alt="aaron tonner web solutions logo"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
