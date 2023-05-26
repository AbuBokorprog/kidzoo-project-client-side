import React from "react";
import { useLoaderData } from "react-router-dom";
import TabularToy from "./TabularToy";

const AllToys = () => {
  const allToys = useLoaderData();
  //console.log(allToys);
  // const {} = allToys;
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
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Sub-Category</th>
                <th>Available-Quantity</th>
                <th>Status</th>
                <th>Seller</th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((a) => (
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
