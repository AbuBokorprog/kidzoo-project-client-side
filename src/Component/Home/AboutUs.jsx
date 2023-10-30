import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full rounded-2xl h-96"
          src="https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_1280.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute top-6 left-5 right-5">
          <div className="flex text-white gap-4">
            <div className="">
              <h2 className="md:text-4xl lg:text-xl md:font-semibold md:mb-2 text-white">
                What Our Clients say about us
              </h2>
              <p className="text-white md:text-xl md:mb-2">
                Not only do the toys make our children squeal with joy, but the
                sales team is awesome!
              </p>
              <button className="rounded-full btn bg-sky-400 btn-warning py-2 px-4">
                <Link to="/about">About Us</Link>
              </button>
            </div>
            <div className="transition ease-in-out delay-150 rounded-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300">
              <div className="card glass">
                <div className="md:card-body h-full">
                  <p className="md:text-title font-semibold md:text-xl">
                    What a great store for the entire family! My kids love this
                    place because of the toys!
                  </p>
                  <div className="">
                    <div className="md:flex md:gap-3 md:justify-center md:items-center">
                      <div>
                        <img
                          className="w-10 rounded-full"
                          src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.2.825737080.1674060681&semt=ais"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-xl">Handy</h3>
                        <p>CEO, Business Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 rounded-2xl duration-300">
              <div className="card glass">
                <div className="md:card-body">
                  <p className="text-title font-semibold md:text-xl">
                    Not only do the toys make our children squeal with joy, but
                    the sales team is awesome!
                  </p>
                  <div className="card-actions">
                    <div className="md:flex md:gap-3 md:justify-center md:items-center">
                      <div>
                        <img
                          className="w-10 rounded-full"
                          src="https://img.freepik.com/premium-vector/arab-omani-man-wear-masar-kamah-vector-icon_596695-7.jpg?size=626&ext=jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-xl">Peter</h3>
                        <p>CEO, Business Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
