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

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element: <AddJob></AddJob>,
      },
      {
        path: "/my-posted-job",
        element: <MyPostedJob></MyPostedJob>,
      },
      {
        path: "/jobcatagory/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch("http://localhost:5001/jobcatagory"),
      },
      {
        path: "/my-bids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/bid-request",
        element: <BidRequest></BidRequest>,
      },
      {
        path: "/update/:id",
        element:<MyPostupdate></MyPostupdate>
      }
    ],
  },
]);

export default Route;
