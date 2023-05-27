import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysTable = ({ myToys }) => {
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
  } = myToys;

  const deleteBtn = (id) => {
    //console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
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
        <button
          onClick={() => deleteBtn(_id)}
          className="btn-error btn-sm rounded-xl"
        >
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
