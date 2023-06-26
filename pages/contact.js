import React from "react";
import Banner from "../components/banners/banner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import Seo from "../components/seo";

export default function Contact() {
  return (
    <LayoutJs>
      <Seo
        title="Book Us - Burning The Ground"
        description="You can contact us on this page using the form."
      />
      <Banner
        img="https://burningtheground.purpleparrotwebsites.com/wp-content/uploads/2023/06/calgary-rock-band-for-large-venue-1.png"
        title="have an upcoming event?"
        subheader="burning the ground"
        description="With impeccable musicianship, authentic costumes, and captivating stage presence, we guarantee an electrifying performance that will leave your audience begging for an encore!"
      />
      <FormContact title="start here!" />
    </LayoutJs>
  );
}
