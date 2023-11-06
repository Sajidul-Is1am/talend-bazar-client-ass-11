import axios from "axios";
import Navbar from "../../Shared/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";

const MyBids = () => {
  const BidsItem = async () => {
    const jobData = await axios.get("http://localhost:5001/my-selected-bids");
    return jobData;
  };

  const { data } = useQuery({
    queryKey: ["jobCatagroy"],
    queryFn: BidsItem,
  });


  return (
    <div>
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div>
        {data?.data.map((bidsItem) => (
          <BidsItem key={bidsItem?._id} bidsItems={bidsItem}></BidsItem>
        ))}
      </div>
    </div>
  );
};

export default MyBids;
