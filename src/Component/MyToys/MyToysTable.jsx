import React from "react";
import { Link } from "react-router-dom";

const MyToysTable = ({ myToys }) => {
  const {
    name,
    email,
    category,
    sellerName,
    Image,
    price,
    Description,
    Rating,
    AvailableQuantity,
  } = myToys;
  return (
    <tr>
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
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{AvailableQuantity}</td>
      <td>{Description}</td>
      <td>{Rating}</td>
      <th>
        <Link to="/update" className="btn btn-success">
          Update
        </Link>
      </th>
      <td>
        <button className="btn-error btn-sm rounded-xl">
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
    </tr>
  );
};

export default MyToysTable;
