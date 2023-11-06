import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./BrowerByCatagory.css";
import moment from "moment/moment";
import { MdOutlineReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const BrowesByCatagory = () => {
  // current date set state

  // const todayDate = moment().format("d, M  YYYY"); ===================================[({date})]
  // console.log(todayDate);

  // data load form add job post on database useing tanstack query
  const jobItem = async () => {
    const jobData = await axios.get("http://localhost:5001/jobcatagory");
    return jobData;
  };

  const { data } = useQuery({
    queryKey: ["jobCatagroy"],
    queryFn: jobItem,
  });
  const allData = data?.data;
  // console.log(allData);

  // manage brows by catagory state managment
  const [selectedCatagory, setSelectedCatagory] = useState("Web Development");
  // console.log(selectedCatagory);

  const filteringCatagory = allData?.filter(
    (jobItem) => jobItem.catagory == selectedCatagory
  );
  // console.log(filteringCatagory);
  // console.log(filteringCatagory, "Tis is filterring output");

  const tabTitle = (
    <>
      <div className="grid grid-cols-3 gap-5 text-white font-bold">
        <Tab
          className="bg-[#3280ee] p-4 rounded-lg"
          onClick={() => setSelectedCatagory("Web Development")}
        >
          Web Development
        </Tab>
        <Tab
          className="bg-[#3280ee] p-4 rounded-lg"
          onClick={() => setSelectedCatagory("Digital Marketing")}
        >
          Digital Marketing
        </Tab>
        <Tab
          className="bg-[#3280ee] p-4 rounded-lg"
          onClick={() => setSelectedCatagory("Graphics Design")}
        >
          Graphics Design
        </Tab>
      </div>
    </>
  );

  return (
    <div className="mx-10 md:mx-16 lg:mx-24">
      {/* heading start */}
      <div className="my-20 grid justify-center">
        <h3 className="lg:text-5xl text-3xl text-center font-bold">
          Browse By Category
        </h3>
      </div>
      {/* heading end */}
      <div className="text-center mx-auto my-20">
        <Tabs>
          <TabList className={"grid justify-center mb-28"}>
            {/* <Tab>Title 1</Tab>
            <Tab>Title 2</Tab> */}
            {tabTitle}
          </TabList>

          <TabPanel className={"grid md:grid-cols-3 grid-cols-1 gap-6 "}>
            {filteringCatagory &&
              filteringCatagory.map((item) => (
                <div key={item._id} className="">
                  <div className="card bgImgWeb bg-gray-400 text-white">
                    <div className="card-body">
                      {/* <p>Job Title</p> */}
                      <h2 className="card-title text-4xl">{item.jobtitle}</h2>
                      <p>
                        <strong>Dead Line</strong> : {item.deadline}
                      </p>
                      <p>
                        <strong>Price Range</strong> : {item.minimumprcie}৳ -
                        {item.maximumprice}৳
                      </p>
                      <p className="text-justify">
                        <strong>Short Descripton </strong> : {item.description}
                      </p>

                      <div className="">
                        <Link to={`/jobcatagory/${item?._id}`}>
                          <button className="btn bg-[#00d8ff] border-none text-white hover:bg-[#ff9ec7]">
                            Bid Now
                            <MdOutlineReadMore></MdOutlineReadMore>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>
          <TabPanel className={"grid md:grid-cols-3 grid-cols-1 gap-6"}>
            {filteringCatagory &&
              filteringCatagory.map((item) => (
                <div key={item._id} className="">
                  <div className="card bgImgDegital bg-gray-400 text-white">
                    <div className="card-body">
                      {/* <p>Job Title</p> */}
                      <h2 className="card-title text-4xl">{item.jobtitle}</h2>
                      <p>
                        <strong>Dead Line</strong> : {item.deadline}
                      </p>
                      <p>
                        <strong>Price Range</strong> : {item.minimumprcie}৳ -
                        {item.maximumprice}৳
                      </p>
                      <p className="text-justify">
                        <strong>Short Descripton </strong> : {item.description}
                      </p>

                      <div className="">
                        <Link to={`/jobcatagory/${item?._id}`}>
                          <button className="btn bg-[#00d8ff] border-none text-white hover:bg-[#ff9ec7]">
                            Bid Now
                            <MdOutlineReadMore></MdOutlineReadMore>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>
          <TabPanel className={"grid md:grid-cols-3 grid-cols-1 gap-6"}>
            {filteringCatagory &&
              filteringCatagory.map((item) => (
                <div key={item._id} className="">
                  <div className="card bgImgGraphoics bg-gray-400 text-white">
                    <div className="card-body">
                      {/* <p>Job Title</p> */}
                      <h2 className="card-title text-4xl">{item.jobtitle}</h2>
                      <p>
                        <strong>Dead Line</strong> : {item.deadline}
                      </p>
                      <p>
                        <strong>Price Range</strong> : {item.minimumprcie}৳ -
                        {item.maximumprice}৳
                      </p>
                      <p className="text-justify">
                        <strong>Short Descripton </strong> : {item.description}
                      </p>

                      <div className="">
                        <Link to={`/jobcatagory/${item?._id}`}>
                          <button className="btn bg-[#00d8ff] border-none text-white hover:bg-[#ff9ec7]">
                            Bid Now
                            <MdOutlineReadMore></MdOutlineReadMore>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BrowesByCatagory;
