import React from "react";
import Banner from "./Banner";
import SubCategory from "./SubCategory";
import GallerySection from "./GallerySection";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <SubCategory></SubCategory>
      </div>
      <div>
        <GallerySection></GallerySection>
      </div>
    </div>
  );
};

export default Home;
