import React from "react";
//himport { HiArrowRight } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="my-20 flex lg:flex-row-reverse gap-4 justify-center items-center">
      <div className="">
        <img
          className="w-full rounded-3xl"
          src="https://cdn.pixabay.com/photo/2014/09/23/12/21/toys-457595_1280.jpg"
          alt=""
        />
      </div>
      <div className="mx-auto w-1/2 text-center">
        <p className="text-xl">NewsLetter SignUp </p>
        <h3 className="text-3xl my-3">Subscribe to the Update!!</h3>
        <form className="flex gap-1">
          <input
            type="email"
            name="name"
            id=""
            className="form-control rounded-xl w-100 px-10 border-4 border-black py-2"
            placeholder="Your Email"
          />
          <input
            className="form-control btn bg-orange-400 hover:bg-teal-300 text-black"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
