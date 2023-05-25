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
      <div className="grid grid-cols-3 gap-5">
        <img
          src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2019/07/24/23/09/car-4361321_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/05/08/23/45/austro-759074_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/06/03/13/38/plymouth-796441_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2020/10/08/16/08/auto-5638401_1280.png"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2019/02/18/10/16/car-4004150_1280.png"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/01/01/01/57/car-3053493_1280.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default GallerySection;