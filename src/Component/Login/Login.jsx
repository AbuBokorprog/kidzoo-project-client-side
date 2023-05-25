import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { user, loginUser, loader, googleLogin } = useContext(authContext);
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        setSuccess("Login successfully");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  const googleLoggedIn = () => {
    googleLogin()
      .then((googleUser) => {
        const user = googleUser.user;
        setSuccess("logged in successfully");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
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
          <h1 className="text-5xl font-bold text-center py-3">Login now!</h1>
          <div className="text-center">
            <p className="text-success">{success}</p>
            <p className="text-error">{error}</p>
          </div>
          <form onSubmit={loginHandler} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p>
                Are you new here!
                <span className="text-blue-500 font-medium">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </form>
          <div className="text-center mb-4">
            <button onClick={googleLoggedIn} className=" btn-circle">
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1684991750~exp=1684992350~hmac=814fdcbcfeee2217a058f357de671a4ef437adbcb010117ef618fe07cd865577"
                alt="google"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
