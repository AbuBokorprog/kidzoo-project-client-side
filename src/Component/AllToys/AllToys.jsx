import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import TabularToy from "./TabularToy";
import { authContext } from "../../AuthProvider/AuthProvider";

const AllToys = () => {
  const { user, loader } = useContext(authContext);

  const allToys = useLoaderData();
  console.log(allToys);
  // const {} = allToys;

  if (loader) {
    <div className="radial-progress" style={{ "--value": 70 }}>
      70%
    </div>;
  }

  return (
    <div>
      <div className="justify-center items-center flex gap-4">
        <div>
          <input
            type="search"
            placeholder="Search here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <button className="btn">
            <input type="submit" name="Search" id="" value="Search" />
          </button>
        </div>
      </div>
      <div className="my-10">
        <img
          className="rounded-2xl"
          src="https://cdn.pixabay.com/photo/2020/04/24/12/54/model-car-5086785_1280.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-5xl font-bold text-center my-5">All Toys</h2>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Toy-Name</th>
                <th>Seller-Name</th>
                <th>Seller-Email</th>
                <th>Price</th>
                <th>Sub-Category</th>
                <th>Available-Quantity</th>
                <th>Description</th>
                <th>Rating</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {allToys.slice(0, 21).map((a) => (
                <TabularToy allToys={a} key={a._id}></TabularToy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
