import React, { useContext } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ShortDescriptionSection = () => {
  const { user } = useContext(authContext);

  const buyBtn = () => {
    if (!user?.email) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login!",
      });
    } else {
      console.log("btn clicked");
    }
  };

  return (
    <div
      className="my-20"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="md:flex gap-5 justify-center items-center">
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 bg-black gap-4">
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
        <div className="md:w-1/2 py-20 rounded-2xl lg:pl-5">
          <h2 className="text-5xl font-bold mb-8">
            We provide & offer premium service.
          </h2>
          <p className="my-4 text-black">
            Our area of practice is quite wide: toy production, custom-made toys
            for every age, toy brand promotion, playrooms design with equipment,
            and of course kids camps and events! Contact us today and get a free
            consultation on any product we offer. Join our community for
            updates.
          </p>
          <p>
            <span className="font-semibold text-xl bg-red-400">
              Free shipping on orders over $50. Sign up for our newsletter and
              get 10% off your first purchase.
            </span>
          </p>
          <div className="my-4">
            <button
              onClick={buyBtn}
              className="bg-red-500 font-medium text-black btn hover:bg-teal-400"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDescriptionSection;
