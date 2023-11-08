import { useQuery } from "@tanstack/react-query";
import Navbar from "../../Shared/Navbar/Navbar";
import axios from "axios";
import MypostedJobItem from "./MypostedJobItem/MypostedJobItem";

const MyPostedJob = () => {
    const MyPostedData = async () => {
      const jobData = await axios.get("http://localhost:5001/jobcatagory");
      return jobData;
    };

    const { data ,refetch } = useQuery({
      queryKey: ["jobCatagroy"],
      queryFn: MyPostedData,
    });
  return (
    <div className="bg-gray-200 pb-20">
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      {/* component heading start hear */}
      <div className=" grid grid-cols-1  lg:grid-cols-3 gap-16 my-24 mx-10 md:mx-16 lg:mx-24">
        {data?.data.map((item) => (
          <MypostedJobItem
            key={item?._id}
            item={item}
            refetch={refetch}
          ></MypostedJobItem>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJob;
// 