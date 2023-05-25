import React from "react";
import Banner from "./Banner";
import SubCategory from "./SubCategory";
import GallerySection from "./GallerySection";
import HomeBanner from "./HomeBanner/HomeBanner";
import ShortDescriptionSection from "../ShortDescriptionSection/ShortDescriptionSection";

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
    </div>
  );
};

export default Home;
