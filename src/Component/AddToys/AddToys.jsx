import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(authContext);
  const addToysHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.ToyName.value;
    const email = form.SellerEmail.value;
    const category = form.Subcategory.value;
    const sellerName = form.SellerName.value;
    const Image = form.Image.value;
    const price = form.Price.value;
    const Rating = form.Rating.value;
    const AvailableQuantity = form.AvailableQuantity.value;
    const Description = form.Description.value;
    const detailsToy = {
      name,
      email,
      category,
      sellerName,
      Image,
      price,
      Description,
      Rating,
      AvailableQuantity,
    };
    //console.log(detailsToy);

    fetch("http://localhost:3000/toy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(detailsToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added Successfully",
            text: "success",
          });
        }
      });
  };

  return (
    <div className="my-20">
      <div>
        <h2 className="text-5xl font-bold text-center my-5">Add a Toy</h2>
      </div>
      <div className="hero bg-base-200 my-10 py-10">
        <div className="hero-content">
          <div className=" shadow-2xl rounded-xl w-full bg-base-100">
            <form onSubmit={addToysHandler} className="card-body">
              <div className=" lg:flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    name="ToyName"
                    defaultValue={""}
                    placeholder="Toy Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub-Category</span>
                  </label>
                  <input
                    type="text"
                    name="Subcategory"
                    placeholder="Sub-Category"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className=" lg:flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    name="SellerName"
                    defaultValue={user?.displayName}
                    placeholder="Seller Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    name="SellerEmail"
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className=" lg:flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input
                    type="text"
                    name="Image"
                    defaultValue={""}
                    placeholder="Picture URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="Price"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="lg:flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="Rating"
                    defaultValue={""}
                    placeholder="Rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available quantity</span>
                  </label>
                  <input
                    type="text"
                    name="AvailableQuantity"
                    defaultValue={""}
                    placeholder="Available quantity"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <textarea
                className="textarea textarea-accent"
                placeholder="Description"
                name="Description"
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn bg-teal-400 btn-block">Add Toy</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
