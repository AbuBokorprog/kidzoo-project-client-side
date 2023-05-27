import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const oldDetails = useLoaderData();
  console.log(oldDetails);
  const { price, AvailableQuantity, Description, _id } = oldDetails;
  const updateToyDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.Price.value;
    const AvailableQuantity = form.AvailableQuantity.value;
    const Description = form.Description.value;
    const updated = { price, Description, AvailableQuantity };
    console.log(updated);
    fetch(`http://localhost:3000/toy/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated Successfully",
            text: "Successful",
          });
        }
      });
  };
  return (
    <div className=" bg-base-200">
      <div className="hero-content">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={updateToyDetails} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="Price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="AvailableQuantity"
                defaultValue={AvailableQuantity}
                placeholder="Available Quantity"
                className="input input-bordered"
              />
            </div>
            <textarea
              className="textarea textarea-secondary"
              placeholder="Description"
              defaultValue={Description}
              name="Description"
            ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
