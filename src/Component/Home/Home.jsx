import React, { useContext } from "react";
import SubCategory from "./SubCategory";
import GallerySection from "./GallerySection";
import HomeBanner from "./HomeBanner/HomeBanner";

import NewsLetter from "../NewsLetter/NewsLetter";
import AboutUs from "./AboutUs";
import ShortDescriptionSection from "./ShortDescriptionSection/ShortDescriptionSection";
import { authContext } from "../../AuthProvider/AuthProvider";
import useRoute from "../../RouteHook/UseRoute";

const Home = () => {
  const { user, loader } = useContext(authContext);
  useRoute("Home");
  if (loader) {
    <div className="radial-progress" style={{ "--value": 70 }}>
      70%
    </div>;
  }

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
      <div className="my-20">
        <AboutUs></AboutUs>
      </div>
      <div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
