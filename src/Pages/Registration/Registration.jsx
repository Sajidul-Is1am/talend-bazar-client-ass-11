import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Navbar from "../../Shared/Navbar/Navbar";
const Registration = () => {
  const navigate = useNavigate();

  const { handleRegistraion, handleUpdate } = useContext(AuthContext);

  const hanldeSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const imglink = form.imglink.value;
    const email = form.email.value;
    const password = form.password.value;

    // registration with email and password
    handleRegistraion(email, password).then((res) => {
      handleUpdate(userName, imglink).then(() => {
        console.log(res.user);
        toast.success("Successfully Registared!");
        navigate("/").catch((error) => {
          // console.log(error.message);
          toast.error(error.message);
        });
      });
    });
  };

  return (
    <div className="backgroundImg">
      <div className="bg-gray-600">
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-purple-600 mb-8">
              Registration!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
            <form onSubmit={hanldeSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">User Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Image Link</span>
                </label>
                <input
                  type="text"
                  name="imglink"
                  placeholder="Image Link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  required
                />
                <label className="label">
                  <p className="text-white">
                    You have an Account Please yet ?
                    <Link to={"/login"} className="text-blue-600">
                      {" "}
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
