import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
// import './JobDetails.css'

const JobDetails = () => {
  const navigate = useNavigate();
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
  const { jobtitle, maximumprice, minimumprcie, deadline, description, email } =
    detailsJob;
    //   console.log(detailsJob); okay
    



  // form data recivetion
  const hanldBiding = (event) => {
    event.preventDefault();
    const form = event.target;
    const beddingprice = form.beddingprice.value;
    const beadingmail = form.beadingmail.value;
    const deadline = form.deadline.value;
    const owneremail = form.owneremail.value;
    const biddsInfo = { beddingprice, beadingmail, deadline, owneremail,jobtitle };

    axios
      .post("http://localhost:5001/my-selected-bids", biddsInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Successfully Create a Job Post!");
          form.reset();
          navigate("/my-bids");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
              <h3 className="lg:text-5xl md:text-3xl text-xl font-bold text-black text-center ">
                {jobtitle}
              </h3>
              <div className="lg:mx-24 mt-10">
                <h5 className="text-base font-semibold mt-4 ml-4">
                  <strong className="text-xl text-[#3071c0]">
                    Dead Line :
                  </strong>{" "}
                  {deadline}
                </h5>
                <h5 className=" mt-4 ml-4 font-semibold text-base">
                  <strong className="text-xl text-[#3071c0]">
                    Price Range:
                  </strong>{" "}
                  {minimumprcie}৳ - {maximumprice}৳
                </h5>
                <h5 className=" mt-4 ml-4 font-semibold text-base max-w-[700px]">
                  <strong className="text-xl text-[#3071c0]">
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
            <h2 className="lg:text-5xl  text-3xl font-bold text-center mb-10 capitalize text-[#3071c0]">
              place your bid
            </h2>
          </div>
          <form
            onSubmit={hanldBiding}
            className="p-10 lg:p-32 border bg-gray-200 rounded-lg"
          >
            <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
              <input
                type="text"
                placeholder="Price (your bidding amount)"
                name="beddingprice"
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
            {email != user?.email ? (
              <button
                type="submit"
                className="btn block border-none mx-auto bg-[#00d8ff] text-white hover:bg-[#ff9ec7] mt-10"
              >
                Bid on the project
              </button>
            ) : (
         
                <button
                  disabled
                  type="submit"
                  className="btn block border-none mx-auto bg-[#00d8ff] text-white hover:bg-[#ff9ec7] mt-10"
                >
                  Bid on the project
                </button>
           
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
