import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const ViewDetails = () => {
  const { user, loader } = useContext(authContext);
  const singleToy = useLoaderData();
  const {
    _id,
    name,
    email,
    category,
    sellerName,
    Image,
    price,
    Description,
    Rating,
    AvailableQuantity,
  } = singleToy;
  console.log(singleToy);

  if (loader) {
    <div className="radial-progress" style={{ "--value": 70 }}>
      70%
    </div>;
  }

  return (
    <div className="card my-20 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="" src={Image} alt="Album" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">Toy Name: {name}</h2>
        <p>Seller Name: {sellerName}</p>
        <p>Seller Email: {email}</p>
        <p>Sub-Category: {category}</p>
        <p>Price: {price}</p>
        <p>Rating: {Rating}</p>
        <p>Available Quantity: {AvailableQuantity}</p>
        <p>Description: {Description}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
