import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="my-20">
      <div className="md:flex gap-1 md:relative sm:mx-auto">
        <img
          className="md:w-1/2 rounded-2xl"
          src="https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
          alt=""
        />
        <img
          className="md:w-1/2 rounded-2xl"
          src="https://img.freepik.com/free-photo/child-with-red-car_1149-686.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
          alt=""
        />
        <div className="md:absolute inset-0 bg-gradient-to-t from-black"></div>
      </div>
      <div className="text-center absolute md:right-72 top-80 text-white">
        <h2 className="md:text-5xl md:font-bold md:mb-4">
          Welcome to <span className="">KidZoo</span>!
        </h2>
        <h2 className="text-center md:font-semibold mx-auto md:text-2xl">
          Pick The Best Toy
        </h2>
        <p className="text-center md:my-2">
          We offer premium products, whether you are shopping at one of our
          actual or via our website!
        </p>
        <div className="mx-auto md:my-4">
          <button className="btn bg-orange-400 text-black hover:bg-teal-400">
            <Link to="/allToys" className="">
              Discover More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
