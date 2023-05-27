import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const TabPanel2 = ({ toy }) => {
  const { user } = useContext(authContext);
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
  } = toy;

  const viewDetailsBtn = () => {
    if (!user?.email) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login!",
      });
    }
  };

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
      <td>{price}</td>
      <td>{Rating}</td>
      <th>
        <Link onClick={viewDetailsBtn} className="btn btn-success">
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default TabPanel2;
