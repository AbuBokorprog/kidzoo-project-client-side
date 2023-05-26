import React, { useContext } from "react";
import { Link } from "react-router-dom";
import svg from "../../assets/Red_blue_illustration_Kids_Toys_logo-removebg-preview.png";
import { authContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, loader, logOutUser } = useContext(authContext);

  // user details
  let userProfile = "";
  let userName = "";
  if (user) {
    userProfile = user.photoURL;
    userName = user.displayName;
  }
  console.log(userProfile);
  console.log(user);

  const logOutHandler = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  if (loader) {
    <div className="radial-progress" style={{ "--value": 70 }}>
      70%
    </div>;
  }

  return (
    <div className="navbar top-0 py-5 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-xl font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allToys" className="text-xl font-medium">
                All Toys
              </Link>
            </li>
            {user?.email && (
              <li>
                <Link to="/myToys" className="text-xl font-medium">
                  My toys
                </Link>
              </li>
            )}
            {user?.email && (
              <li>
                <Link to="/AddAToys" className="text-xl font-medium">
                  Add a Toys
                </Link>
              </li>
            )}
            <li>
              <Link to="/blog" className="text-xl font-medium">
                blog
              </Link>
            </li>
            {user?.email ? (
              <li>
                <button onClick={logOutHandler} className="text-xl font-medium">
                  LogOut
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="text-xl font-medium">
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link className="text-xl font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <h1 className="text-5xl">
            <span className="text-orange-500 font-bold">KidZ</span>oo
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-xl font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/allToys" className="text-xl font-medium">
              All Toys
            </Link>
          </li>
          {user?.email && (
            <li>
              <Link to="/myToys" className="text-xl font-medium">
                My toys
              </Link>
            </li>
          )}
          {user?.email && (
            <li>
              <Link to="/AddToys" className="text-xl font-medium">
                Add a Toys
              </Link>
            </li>
          )}
          <li>
            <Link to="/blog" className="text-xl font-medium">
              blog
            </Link>
          </li>
          {user?.email ? (
            <li>
              <button onClick={logOutHandler} className="text-xl font-medium">
                LogOut
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="text-xl font-medium">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end pr-5">
        {user?.email ? (
          <Link className="text-xl font-medium">
            <img
              className="w-10 rounded-3xl"
              src={userProfile}
              alt="Profile-Picture"
              title={userName}
            />
          </Link>
        ) : (
          <Link to="/login" className="text-xl font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
