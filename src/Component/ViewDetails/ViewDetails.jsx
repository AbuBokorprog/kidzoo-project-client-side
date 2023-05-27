import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const ViewDetails = () => {
  const { user, loader } = useContext(authContext);
  const singleToy = useLoaderData();
  const { ToyName, _id, Subcategory, Price, AvailableQuantity, Image } =
    singleToy;
  console.log(singleToy);
  if (loader) {
    <div className="radial-progress" style={{ "--value": 70 }}>
      70%
    </div>;
  }

  return (
    <div className="flex gap-5 my-10 justify-center items-center">
      <div className="w-1/2">
        <img className="" src={Image} alt="Image" />
      </div>
      <div className="w-1/2 bg-sky-300 pl-10 py-10 rounded-xl">
        <h3 className="text-3xl font-bold my-3">Toy Name: {ToyName}</h3>
        <h4 className="text-2xl font-semibold my-3">
          Seller: {user?.displayName}
        </h4>
        <h5 className="text-xl font-semibold">Seller Email: {user?.email}</h5>
        <p className=" text-xl font-semibold my-3">
          Sub-Category: {Subcategory}
        </p>
        <p className="text-xl text-red-700 font-semibold my-3">
          Price: {Price}
        </p>
        <p className="text-xl font-semibold my-3">
          Available Quantity: {AvailableQuantity}
        </p>
      </div>
    </div>
  );
};

export default ViewDetails;
