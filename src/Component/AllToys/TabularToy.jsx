import React from "react";
import { Link } from "react-router-dom";

const TabularToy = ({ allToys }) => {
  //console.log(allToys);
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
  } = allToys;
  //console.log(allToys);
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
      <td>{price}</td>
      <td>{category}</td>
      <td>{AvailableQuantity}</td>
      <th>
        <Link to={`/viewDetails/${_id}`} className="btn btn-success">
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default TabularToy;
