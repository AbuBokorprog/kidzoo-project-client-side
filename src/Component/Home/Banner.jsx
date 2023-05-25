import React from "react";

const Banner = () => {
  return (
    <div className="my-20">
      <div className="flex gap-5 justify-center items-center">
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/free-photo/fun-trex-3d-illustration_183364-81258.jpg?size=626&ext=jpg&ga=GA1.2.825737080.1674060681&semt=ais"
              alt=""
            />
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?w=740&t=st=1685004672~exp=1685005272~hmac=53a311c9476381ec81e74e362102bb50f67fb575c8fdcbd7b96bf6bba932e687"
              alt=""
            />
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?w=900"
              alt=""
            />
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/premium-photo/many-colored-little-toy-cars-gray-background_188237-1375.jpg?w=900"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 py-20 rounded-2xl pl-5">
          <h2 className="text-5xl font-bold mb-8">
            Welcome to <span className="">KidZoo</span>!
          </h2>
          <p className="my-4">
            Discover endless fun and adventure with our wide selection of toys
            for kids of all ages. Shop Now for the perfect playtime companions
            and let imaginations soar! <br />
          </p>
          <p>
            <span className="font-semibold text-red-600">
              Free shipping on orders over $50. Sign up for our newsletter and
              get 10% off your first purchase.
            </span>
          </p>
          <div className="my-4">
            <button className="btn-success btn bg-red-500">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
