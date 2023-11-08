import axios from "axios";
import Navbar from "../../Shared/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import BidsItem from "./BidsItem/BidsItem";

const MyBids = () => {
  const BidCollection = async () => {
    const jobData = await axios.get("http://localhost:5001/my-selected-bids");
    return jobData;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["bidItems"],
    queryFn: BidCollection,
  });

  
  console.log(data?.data);


  return (
    <div>
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div>
        {
          data?.data && 
          data?.data.map(item => <BidsItem key={item._id} items={item}></BidsItem>)
        }
      </div>
    </div>
  );
};

export default MyBids;
