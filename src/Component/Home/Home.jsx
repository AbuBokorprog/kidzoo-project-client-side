import React from "react";
import SubCategory from "./SubCategory";
import GallerySection from "./GallerySection";
import HomeBanner from "./HomeBanner/HomeBanner";

import NewsLetter from "../NewsLetter/NewsLetter";
import AboutUs from "./AboutUs";
import ShortDescriptionSection from "./ShortDescriptionSection/ShortDescriptionSection";

const Home = () => {
  return (
    <div>
      <div>
        <HomeBanner></HomeBanner>
      </div>
      <div>
        <SubCategory></SubCategory>
      </div>
      <div>
        <ShortDescriptionSection></ShortDescriptionSection>
      </div>
      <div>
        <GallerySection></GallerySection>
      </div>
      <div>
        <AboutUs></AboutUs>
      </div>
      <div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
