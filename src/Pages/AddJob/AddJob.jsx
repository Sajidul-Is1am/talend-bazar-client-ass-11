import { useContext, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    // nagiation from this route on my job route
    const navigate = useNavigate()
    // this useState use for set catagory exact value
    const [catagory, setCatagory] = useState(null)
    
    // user Info need for user email on set input feild get on AuthProivder
    const { user } = useContext(AuthContext);
    // console.log(user?.email)

    // this function are selected catagory jobs
    const handleCatagorySelect = event => {
        const seletedCatagory = event.target.value;
        setCatagory(seletedCatagory);
    }


    //  this is job info function
  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
      const email = form.email.value;
      const jobtitle = form.jobtitle.value;
      const deadline = form.deadline.value;
      const minimumprcie = form.minimumprcie.value;
      const maximumprice = form.maximumprice.value;
      const description = form.description.value;

    const jobInfo = { email, jobtitle, deadline, minimumprcie, maximumprice, description, catagory }
    console.log(jobInfo);
      //   heating for post data on database this joninfo set on database that's why this feacthing
      axios.post("http://localhost:5001/addjob", jobInfo)
          .then(res => {
              console.log(res.data);
              if (res.data.insertedId) {
                  toast.success("Successfully Create a Job Post!");
                  form.reset();
                  navigate("/my-posted-job");
              }
          })
          .catch(error => {
          console.log(error.message)
        })
      

  };

 

  return (
    <div className="bg-gray-400 h-auto">
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div className="h-auto pb-10">
        <div className="lg:mx-96 md:mx-16  rounded-xl my-8 bg-gray-200">
          <h3 className="font-bold text-center mx-10 lg:text-4xl text-2xl py-10 text-[#3071c0]">
            Share a Job Opportunity
          </h3>
          <form onSubmit={handleAddJob} className="p-10 border">
            <div className="grid justify-center gap-6 grid-cols-1 md:grid-cols-2 ">
              <input
                defaultValue={user?.email}
                type="text"
                placeholder="Email"
                name="email"
                className="input input-bordered "
                disabled
              />
              <input
                type="text"
                placeholder="Job Title"
                name="jobtitle"
                className="input input-bordered "
                required
              />
              <input
                type="date"
                placeholder="Dead Line"
                name="deadline"
                className="input input-bordered "
                required
              />

              <select
                name="catagory"
                id=""
                onChange={handleCatagorySelect}
                placeholder="Select Catagory"
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
                className="input input-bordered "
                required
              />
              <input
                type="text"
                placeholder="Maximum Price"
                name="maximumprice"
                className="input input-bordered"
                required
              />
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered h-[180px] col-span-2 p-4"
                required
              />
            </div>
            <button
              type="submit"
              className="btn block mx-auto mt-10 bg-[#0a45da] text-white hover:bg-gray-500"
            >
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddJob;
