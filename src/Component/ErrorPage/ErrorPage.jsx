import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img
        className="mx-auto w-96"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1685003414~exp=1685004014~hmac=38ebe3b0bba2c0c51d1f0f8bd133bdc964bc4c93cc80b1ac464f7ec29f886f02"
        alt=""
      />
      <Link to="/">
        <button className="btn btn-error">Go back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
