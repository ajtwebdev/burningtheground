import dynamic from "next/dynamic";

// manually import all PageComponents as Next restricts dynamic import from string literals
// TODO: Add the remaining PageComponents to match Flexible Fields
const PageComponents_Badges = dynamic(() =>
  import("components/PageComponents/Badges")
);
const PageComponents_Banner = dynamic(() =>
  import("components/PageComponents/Banner")
);
const PageComponents_ComponentA = dynamic(() =>
  import("components/PageComponents/ComponentA")
);
const PageComponents_ComponentB = dynamic(() =>
  import("components/PageComponents/ComponentB")
);
const PageComponents_ComponentC = dynamic(() =>
  import("components/PageComponents/ComponentC")
);
const PageComponents_ComponentD = dynamic(() =>
  import("components/PageComponents/ComponentD")
);
const PageComponents_ComponentE = dynamic(() =>
  import("components/PageComponents/ComponentE")
);
const PageComponents_ImageLeft = dynamic(() =>
  import("components/PageComponents/ImageLeft")
);
const PageComponents_ImageLeftDark = dynamic(() =>
  import("components/PageComponents/ImageLeftDark")
);
const PageComponents_ImageRight = dynamic(() =>
  import("components/PageComponents/ImageRight")
);
const PageComponents_Text = dynamic(() =>
  import("components/PageComponents/Text")
);
const PageComponents_HeroSlider = dynamic(() =>
  import("components/PageComponents/HeroSlider")
);
const PageComponents_Hero = dynamic(() =>
  import("components/PageComponents/Hero")
);
const PageComponents_Benefits1 = dynamic(() =>
  import("components/PageComponents/Benefits1")
);
const PageComponents_Testimonial = dynamic(() =>
  import("components/PageComponents/Testimonial")
);
const PageComponents_Faq = dynamic(() =>
  import("components/PageComponents/Faq")
);
const PageComponents_FaqTab = dynamic(() =>
  import("components/PageComponents/FaqTab")
);
const PageComponents_PatioSlider = dynamic(() =>
  import("components/PageComponents/PatioSlider")
);
const PageComponents_TabsSide = dynamic(() =>
  import("components/PageComponents/TabsSide")
);
const PageComponents_TabsTop = dynamic(() =>
  import("components/PageComponents/TabsTop")
);
const PageComponents_Carousel = dynamic(() =>
  import("components/PageComponents/Carousel")
);
const PageComponents_Cta1 = dynamic(() =>
  import("components/PageComponents/Cta1")
);
const PageComponents_Cta3 = dynamic(() =>
  import("components/PageComponents/Cta3")
);
const PageComponents_Cta2 = dynamic(() =>
  import("components/PageComponents/Cta2")
);
const PageComponents_Ebook = dynamic(() =>
  import("components/PageComponents/Ebook")
);
const PageComponents_ImageGallery = dynamic(() =>
  import("components/PageComponents/ImageGallery")
);
const PageComponents_ImageSlider = dynamic(() =>
  import("components/PageComponents/ImageSlider")
);
const PageComponents_ProcessA = dynamic(() =>
  import("components/PageComponents/ProcessA")
);
const PageComponents_ProcessB = dynamic(() =>
  import("components/PageComponents/ProcessB")
);
const PageComponents_RelatedServices = dynamic(() =>
  import("components/PageComponents/RelatedServices")
);
const PageComponents_ServiceArea = dynamic(() =>
  import("components/PageComponents/ServiceArea")
);
const PageComponents_Bio = dynamic(() =>
  import("components/PageComponents/Bio")
);
const PageComponents_Acknowledgements = dynamic(() =>
  import("components/PageComponents/Acknowledgements")
);
const PageComponents_Beliefs = dynamic(() =>
  import("components/PageComponents/Beliefs")
);
const PageComponents_SeoPage = dynamic(() =>
  import("components/PageComponents/SeoPage")
);
const PageComponents_Video1 = dynamic(() =>
  import("components/PageComponents/Video1")
);
const PageComponents_Plans1 = dynamic(() =>
  import("components/PageComponents/Plans1")
);
const PageComponents_Members = dynamic(() =>
  import("components/PageComponents/Members")
);
const PageComponents_Shows = dynamic(() =>
  import("components/PageComponents/Shows")
);
const PageComponents_VideoGallery = dynamic(() =>
  import("components/PageComponents/VideoGallery")
);

const Components = new Map();
Components.set("PageComponents_Badges", PageComponents_Badges);
Components.set("PageComponents_Banner", PageComponents_Banner);
Components.set("PageComponents_ComponentA", PageComponents_ComponentA);
Components.set("PageComponents_ComponentB", PageComponents_ComponentB);
Components.set("PageComponents_ComponentC", PageComponents_ComponentC);
Components.set("PageComponents_ComponentD", PageComponents_ComponentD);
Components.set("PageComponents_ComponentE", PageComponents_ComponentE);
Components.set("PageComponents_ImageLeft", PageComponents_ImageLeft);
Components.set("PageComponents_ImageLeftDark", PageComponents_ImageLeftDark);
Components.set("PageComponents_ImageRight", PageComponents_ImageRight);
Components.set("PageComponents_Text", PageComponents_Text);
Components.set("PageComponents_HeroSlider", PageComponents_HeroSlider);
Components.set("PageComponents_Hero", PageComponents_Hero);
Components.set("PageComponents_Benefits1", PageComponents_Benefits1);
Components.set("PageComponents_Testimonial", PageComponents_Testimonial);
Components.set("PageComponents_Faq", PageComponents_Faq);
Components.set("PageComponents_FaqTab", PageComponents_FaqTab);
Components.set("PageComponents_PatioSlider", PageComponents_PatioSlider);
Components.set("PageComponents_TabsSide", PageComponents_TabsSide);
Components.set("PageComponents_TabsTop", PageComponents_TabsTop);
Components.set("PageComponents_Carousel", PageComponents_Carousel);
Components.set("PageComponents_Cta1", PageComponents_Cta1);
Components.set("PageComponents_Cta3", PageComponents_Cta3);
Components.set("PageComponents_Cta2", PageComponents_Cta2);
Components.set("PageComponents_Ebook", PageComponents_Ebook);
Components.set("PageComponents_ImageGallery", PageComponents_ImageGallery);
Components.set("PageComponents_ImageSlider", PageComponents_ImageSlider);
Components.set("PageComponents_ProcessA", PageComponents_ProcessA);
Components.set("PageComponents_ProcessB", PageComponents_ProcessB);
Components.set(
  "PageComponents_RelatedServices",
  PageComponents_RelatedServices
);
Components.set("PageComponents_ServiceArea", PageComponents_ServiceArea);
Components.set("PageComponents_Bio", PageComponents_Bio);
Components.set(
  "PageComponents_Acknowledgements",
  PageComponents_Acknowledgements
);
Components.set("PageComponents_Beliefs", PageComponents_Beliefs);
Components.set("PageComponents_SeoPage", PageComponents_SeoPage);
Components.set("PageComponents_Video1", PageComponents_Video1);
Components.set("PageComponents_Plans1", PageComponents_Plans1);
Components.set("PageComponents_Members", PageComponents_Members);
Components.set("PageComponents_Shows", PageComponents_Shows);
Components.set("PageComponents_VideoGallery", PageComponents_VideoGallery);

export default Components;
