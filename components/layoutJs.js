import React from "react";
import styled from "styled-components";
import FinanceBanner from "./financeBanner";
import ContactBanner from "./contactBanner";
import Footer from "./Footer/Footer";
import GoogleBadge from "./googleBadge";
import HeaderBasic from "./headers/header";
import Seo from "./seo";
import Proverb from "./proverb";
import RecentPostsData from "./recent-posts/index";
import Header from "./Header/Header";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Seo title="Become Conquer" description="Mindset coach." />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
}
