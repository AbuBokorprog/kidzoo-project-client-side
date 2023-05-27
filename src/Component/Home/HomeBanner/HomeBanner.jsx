import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="my-20">
      <div className="md:flex gap-1 relative sm:mx-auto">
        <img
          className="w-1/2 rounded-2xl"
          src="https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
          alt=""
        />
        <img
          className="w-1/2 rounded-2xl"
          src="https://img.freepik.com/free-photo/child-with-red-car_1149-686.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      </div>
      <div className="text-center absolute right-72 top-80 text-white">
        <h2 className="text-5xl font-bold mb-4">
          Welcome to <span className="">KidZoo</span>!
        </h2>
        <h2 className="text-center font-semibold mx-auto text-2xl">
          Pick The Best Toy
        </h2>
        <p className="text-center my-2">
          We offer premium products, whether you are shopping at one of our
          actual or via our website!
        </p>
        <div className="mx-auto my-4">
          <button className="btn bg-orange-400 text-black hover:bg-teal-400">
            <Link className="">Discover More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
