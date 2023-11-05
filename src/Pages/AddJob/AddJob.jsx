import Navbar from "../../Shared/Navbar/Navbar";

const AddJob = () => {
  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
  };

  // Email of the employer(read-only)
  // ● Job title
  // ● Deadline
  // ● Description
  // ● Category-these are the names of tab options of the homepage(implement a
  // dropdown for selecting category)
  // ● Minimum price
  // ● Maximum price

  return (
    <div className="bg-gray-400 h-auto">
      <div className="bg-[#3071c0]">
        <Navbar></Navbar>
      </div>
      <div className="h-auto pb-10">
        <div className="lg:mx-96 md:mx-16 mx-10 rounded-xl my-8 bg-gray-200">
          <h3 className="font-bold text-center text-4xl py-10 text-[#3071c0]">
            Share a Job Opportunity
          </h3>
          <form onSubmit={handleAddJob} className="p-10 border">
            <div className="grid justify-center gap-6 md:grid-cols-2 grid-cols-1 ">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input input-bordered "
                required
              />
              <input
                type="text"
                placeholder="Job Title"
                name="job-title"
                className="input input-bordered "
                required
              />
              <input
                type="text"
                placeholder="Dead Line"
                name="deadline"
                className="input input-bordered "
                required
              />

              <select name="catagory" id="" placeholder="Select Catagory">
                <option value="web">Select Catagory</option>
                <option value="web">Web Development</option>
                <option value="digital">Digital Marketing</option>
                <option value="graphics">Graphics Design</option>
              </select>
              <input
                type="text"
                placeholder="Minimum Price"
                name="minimum-prcie"
                className="input input-bordered "
                required
              />
              <input
                type="text"
                placeholder="Maximum Price"
                name="maximum-price"
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
