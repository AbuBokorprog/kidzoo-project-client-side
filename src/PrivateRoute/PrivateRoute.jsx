import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }
  console.log(loader);
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
