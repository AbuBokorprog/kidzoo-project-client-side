import React from "react";

const GallerySection = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-center font-semibold text-3xl">Our Products</h2>
        <p className="py-3">
          Discover thrilling car toys that ignite imagination and fuel endless
          fun! From high-speed race cars to versatile playsets, our collection
          offers excitement and joy for every young driver. Unleash the
          adventure today!
        </p>
      </div>

      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2016/10/20/06/00/fiat-1754723_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-80"
            src="https://cdn.pixabay.com/photo/2015/11/16/15/57/fire-1045906_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2020/04/24/12/54/model-car-5086785_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-80"
            src="https://cdn.pixabay.com/photo/2016/11/24/14/28/christmas-tree-1856383_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2017/02/19/22/32/mercedes-benz-2081097_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-80"
            src="https://cdn.pixabay.com/photo/2017/10/23/14/24/car-2881217_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2017/10/23/14/27/car-2881236_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2021/02/06/07/01/pedal-car-5987090_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2019/12/28/22/22/figure-4725909_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
