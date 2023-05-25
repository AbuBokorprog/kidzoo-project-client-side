import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { user, createUser, loader } = useContext(authContext);
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);

  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const PhotoURL = form.photoURL.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        setSuccess("Registered successfully");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        setSuccess("");
      });
  };
  if (loader) {
    <div className="radial-progress" style={{ "--value": 70 }}>
      70%
    </div>;
  }

  return (
    <div className="hero min-h-screen rounded-2xl bg-base-200 my-20">
      <div className="hero-content flex-col gap-10 justify-center items-center lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img
            className="w-full rounded-2xl my-5"
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=sph"
            alt="login"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center py-3">Register!</h1>
          <div className="text-center">
            <p className="text-success">{success}</p>
            <p className="text-error">{error}</p>
          </div>
          <form onSubmit={registerHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="file"
                name="PhotoURL"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              <p>
                Are you Registered!
                <span className="text-blue-500 font-medium">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
