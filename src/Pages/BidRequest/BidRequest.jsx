import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BidReqItem from "./BidReqItem/BidReqItem";

const BidRequest = () => {
  const RequestCollection = async () => {
    const bidItem = await axios.get("https://talendbazaar-server.vercel.app/my-selected-bids");
    return bidItem;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["bidRequest"],
    queryFn: RequestCollection,
  });
  console.log(data?.data);

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
          <title>TanlentBazaar || Bid Request</title>
        </Helmet>
      </div>
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="mx-10 md:mx-16 lg:mx-24">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="grid grid-cols-6 justify-between text-center bg-blue-200 font-bold text-base">
                  <th >Title</th>
                  <th>Email</th>
                  <th>Dead Line</th>
                  <th>Price Range</th>
                  <th>Status</th>
                  <th>Request</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {data?.data &&
                    data?.data.map((item) => (
                      <BidReqItem key={item._id} items={item}></BidReqItem>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidRequest;
