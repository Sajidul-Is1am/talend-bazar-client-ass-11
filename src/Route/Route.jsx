import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import JobDetails from "../Pages/Home/JobDetails/JobDetails";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequest from "../Pages/BidRequest/BidRequest";
import ErrorPage from "../Pages/Registration/ErrorPage";
import MyPostupdate from "../Pages/MyPostupdate/MyPostupdate";
import PrivetRoute from "./PrivetRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/add-job",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-posted-job",
        element: (
          <PrivetRoute>
            <MyPostedJob></MyPostedJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/jobcatagory/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) => fetch("http://localhost:5001/jobcatagory"),
      },
      {
        path: "/my-bids",
        element: (
          <PrivetRoute>
            <MyBids></MyBids>
          </PrivetRoute>
        ),
      },
      {
        path: "/bid-request",
        element: (
          <PrivetRoute>
            <BidRequest></BidRequest>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <MyPostupdate></MyPostupdate>
          </PrivetRoute>
        ),
        loader: ({ params }) => fetch("http://localhost:5001/jobcatagory"),
      },
    ],
  },
]);

export default Route;
