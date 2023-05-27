import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import MyToysTable from "./MyToysTable";

const MyToys = () => {
  const { user, loader } = useContext(authContext);
  const [myToys, setMyToys] = useState([]);
  const toysURL = `http://localhost:3000/toy?email=${user?.email}`;
  useEffect(() => {
    fetch(toysURL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMyToys(data);
      });
  }, [toysURL]);
  console.log(myToys);
  return (
    <div>
      <div className="my-10">
        <img
          className="rounded-2xl"
          src="https://cdn.pixabay.com/photo/2020/04/24/12/54/model-car-5086785_1280.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-5xl font-bold text-center my-5">
          My Toys {myToys.length}
        </h2>
      </div>
      <div className="my-20">
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
                <th>Remove</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((t) => (
                <MyToysTable myToys={t} key={t._id}></MyToysTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
