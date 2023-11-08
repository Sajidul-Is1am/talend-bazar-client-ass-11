import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const MyPostupdate = () => {
  const updateId = useParams();
  const JobPostedAll = useLoaderData();
  // console.log(updateId,JobPostedAll);
  // console.log(updateId);

  const updateItem = JobPostedAll.find((item) => item?._id == updateId.id);
  // console.log(updateItem);
    const {
      _id,
    email,
    jobtitle,
    deadline,
    minimumprcie,
    maximumprice,
    description,
    catagory,
  } = updateItem;

    
    const handeUpdate = (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const jobtitle = form.jobtitle.value;
            const deadline = form.deadline.value;
            const minimumprcie = form.minimumprcie.value;
            const maximumprice = form.maximumprice.value;
            const description = form.description.value;

            const jobInfo = {
              email,
              jobtitle,
              deadline,
              minimumprcie,
              maximumprice,
              description,
              catagory,
        };
        // console.log(jobInfo);
        axios.put(`https://talendbazaar-server.vercel.app/jobcatagory/update/${_id}`, jobInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("Succesfully Update Your Post")
                }
        })
    }


  return (
    <div className="">
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="h-auto pb-10">
          <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-[#3071c0]">
              Update Your Added Post
            </h3>
            <form onSubmit={handeUpdate} className="p-10 border">
              <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered  col-span-2 md:col-span-1"
                  defaultValue={email}
                  disabled
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  name="jobtitle"
                  className="input input-bordered  col-span-2 md:col-span-1"
                  defaultValue={jobtitle}
                  required
                />
                <input
                  type="date"
                  placeholder="Dead Line"
                  name="deadline"
                  className="input input-bordered  col-span-2 md:col-span-1"
                  defaultValue={deadline}
                  required
                />

                <select
                  defaultValue={catagory}
                  name="catagory"
                  id=""
                  placeholder="Select Catagory"
                  className="col-span-2 md:col-span-1 input input-bordered"
                >
                  <option>Select Catagory</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>
                <input
                  type="text"
                  placeholder="Minimum Price"
                  name="minimumprcie"
                  className="input input-bordered  col-span-2 md:col-span-1"
                  defaultValue={minimumprcie}
                  required
                />
                <input
                  type="text"
                  placeholder="Maximum Price"
                  name="maximumprice"
                  className="input input-bordered col-span-2 md:col-span-1"
                  defaultValue={maximumprice}
                  required
                />
                <textarea
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="input input-bordered h-[180px] col-span-2 p-4 "
                  defaultValue={description}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn block mx-auto mt-10 bg-[#0a45da] text-white hover:bg-gray-500"
              >
                Update Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostupdate;
