import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AllToys from "../Component/AllToys/AllToys";
import MyToys from "../Component/MyToys/MyToys";
import AddToys from "../Component/AddToys/AddToys";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Blog from "../Component/Blog/Blog";
import ViewDetails from "../Component/ViewDetails/ViewDetails";
import UpdateToy from "../Component/UpdateToy/UpdateToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "./About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://kidzoo-server-side.vercel.app/toy"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://kidzoo-server-side.vercel.app/toy/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://kidzoo-server-side.vercel.app/toy/${params.id}`),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
