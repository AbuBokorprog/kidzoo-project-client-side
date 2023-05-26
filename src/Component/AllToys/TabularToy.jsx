import React from "react";
import { Link } from "react-router-dom";

const TabularToy = ({ allToys }) => {
  //console.log(allToys);
  const { ToyName, _id, Subcategory, Price, AvailableQuantity, Image } =
    allToys;
  return (
    <tr>
      <td>
        <button className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squire w-20">
              <img
                className="w-full"
                src={Image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold"></div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>{ToyName}</td>
      <td>{Price}</td>
      <td>{Subcategory}</td>
      <td>{AvailableQuantity}</td>
      <th>
        <Link to={`/viewDetails/${_id}`} className="btn btn-success">
          View Details
        </Link>
        {/* {status === "confirm" ? (
          <button className="btn btn-success btn-xs">Accepted</button>
        ) : (
          <button className="btn btn-success btn-xs">Pending</button>
        )} */}
      </th>
    </tr>
  );
};

export default TabularToy;
