import { RxUpdate } from "react-icons/rx";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
const MypostedJobItem = ({ item, refetch }) => {
  const {
    _id,
    deadline,
    description,
    maximumprice,
    minimumprcie,
    jobtitle,
    email,
    catagory,
  } = item;

  // delete item
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/jobcatagory/delete/${id}`)
      .then((res) => {
          console.log(res.data);
          refetch()
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="card flex-1 flex-col  bg-base-100 shadow-xl ">
        <figure>
          <img
            src="https://i.ibb.co/gMNqBhQ/23306561-1911-i305-033-S-m005-c10-lawyer-compositions-01.jpg"
            alt="jobs"
            className="h-[200px] w-full"
          />
        </figure>
        <div className="card-body">
          <h4 className="text-sm font-semibold">
            <span className="font-bold">Email : </span>
            {email}
          </h4>
          <h2 className="card-title">
            <span>Job Title : </span> {jobtitle}
          </h2>
          <h2 className="text-xl font-bold">
            <span>Category : </span>
            {catagory}
          </h2>
          <p>
            <strong>Dead Line : </strong>
            {deadline}
          </p>
          <p>
            <strong>Minimum Price : </strong>
            {minimumprcie}৳
          </p>
          <p>
            <strong>Maximum Price : </strong>
            {maximumprice}৳
          </p>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <div className="card-actions justify-around mt-4">
            <Link to={`/update/${_id}`}>
              <div className="btn rounded btn-outline btn-primary">
                Update<RxUpdate></RxUpdate>
              </div>
            </Link>
            <Link onClick={() => handleDelete(_id)}>
              <div className="btn btn-outline btn-primary">
                Delete <MdDeleteSweep></MdDeleteSweep>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypostedJobItem;
