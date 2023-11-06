import Navbar from "../../Shared/Navbar/Navbar";

const MyPostupdate = () => {
  return (
    <div className="">
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="h-auto pb-10">
          <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
            <h3 className="font-bold text-center text-4xl py-10 text-[#3071c0]">
              Share a Job Opportunity
            </h3>
            <form className="p-10 border">
              <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
                <input

                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered "
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
    </div>
  );
};

export default MyPostupdate;
