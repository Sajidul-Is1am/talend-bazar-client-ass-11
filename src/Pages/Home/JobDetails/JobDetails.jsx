import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
// import './JobDetails.css'

const JobDetails = () => {
    // this is logedin user email for form
    const { user } = useContext(AuthContext);
  // which button i clik get this id on url
  const { id } = useParams();
  // console.log(id); okay
  // fething data get on route folder all jobcatagory data
  const jobCatagroyAll = useLoaderData();
  // console.log(jobCatagroyAll); okay

  // find spacific one which job catagory you click
  const detailsJob = jobCatagroyAll.find(
    (jobCatagory) => jobCatagory?._id == id
  );
  const { jobtitle, maximumprice, minimumprcie, deadline, description,email } =
    detailsJob;
  console.log(detailsJob);
  return (
    <div>
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      {/* start hare details  */}
      <div className="mx-10 md:mx-16 lg:mx-24 my-16">
        {/*  */}
        <div className="mb-16">
          <div className="mockup-window border bg-base-300">
            <div className="flex flex-col justify-center px-4 py-16 bg-base-200 mx-auto">
              <h3 className="text-5xl font-bold text-black text-center ">
                {jobtitle}
              </h3>
              <div className="lg:mx-24 mt-10">
                <h5 className="text-xl font-semibold mt-4 ml-4">
                  <strong className="text-2xl text-[#3071c0]">
                    Dead Line :
                  </strong>{" "}
                  {deadline}
                </h5>
                <h5 className=" mt-4 ml-4 font-semibold text-xl">
                  <strong className="text-2xl text-[#3071c0]">
                    Price Range:
                  </strong>{" "}
                  {minimumprcie}৳ - {maximumprice}৳
                </h5>
                <h5 className=" mt-4 ml-4 font-semibold text-xl max-w-[700px]">
                  <strong className="text-2xl text-[#3071c0]">
                    Description:
                  </strong>{" "}
                  {description}
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* last form */}
        <div>
          <div>
            <h2 className="text-5xl font-bold text-center mb-10 capitalize text-[#3071c0]">
              place your bid
            </h2>
          </div>
          <form className="p-10 lg:p-32 border bg-gray-200 rounded-lg">
            <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
              <input
                type="text"
                placeholder="Price (your bidding amount)"
                name="email"
                className="input input-bordered "
              />

              <input
                type="date"
                placeholder="Dead Line"
                name="deadline"
                className="input input-bordered "
                required
              />
              <input
                defaultValue={user?.email}
                type="email"
                placeholder="Who Has Beading email"
                name="beadingmail"
                className="input input-bordered border"
                disabled
              />
              <input
                defaultValue={email}
                type="emai "
                placeholder="Owenr Email"
                name="owneremail"
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <button
              type="submit"
              className="btn block border-none mx-auto bg-[#00d8ff] text-white hover:bg-[#ff9ec7] mt-10"
            >
              Bid on the project
            </button>{" "}
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
