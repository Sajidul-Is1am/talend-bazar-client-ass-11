import axios from "axios";
import Navbar from "../../Shared/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import BidsItem from "./BidsItem/BidsItem";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const MyBids = () => {
    const { user } = useContext(AuthContext);
  const BidCollection = async () => {
    const jobData = await axios.get("http://localhost:5001/my-selected-bids");
    return jobData;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["bidItems"],
    queryFn: BidCollection,
  });

  // console.log(data?.data);
  //  const SpacificUserMyBidsFilter = data?.data.filter(
  //    (bidedduser) => bidedduser?.email == user?.email
  // );
  // console.log(SpacificUserMyBidsFilter);
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg text-7xl flex mx-auto justify-center items-center h-screen">
        Loading
      </span>
    );
  }
    return (
      <div>
        <div>
          <Helmet>
            <title>TanlentBazaar || My Bids</title>
          </Helmet>
        </div>
        <div className="bg-[#3071c0]">
          <Navbar></Navbar>
        </div>
        <div className="mx-10 md:mx-16 lg:mx-24">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="grid grid-cols-5 justify-between text-center bg-blue-200 font-bold text-base">
                  <th>Title</th>
                  <th>Email</th>

                  <th>Dead Line</th>
                  <th>Status</th>
                  <th>Button</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {data?.data &&
                    data?.data.map((item) => (
                      <BidsItem key={item._id} items={item}></BidsItem>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyBids;
