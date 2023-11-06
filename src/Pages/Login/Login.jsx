import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Navbar from "../../Shared/Navbar/Navbar";

const Login = () => {
  const { handleRegistraionInGoogle, handleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log( email, password);

    // login with email and password
    handleLogin(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // registratin with google
  const regisrationGoogle = () => {
    handleRegistraionInGoogle()
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
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
              Login now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black ">
            <form onSubmit={handleLoginSubmit} className="card-body">
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
                    Dont have an Account yet?
                    <Link to={"/register"} className="text-blue-600">
                      Registration
                    </Link>
                  </p>
                </label>
                <div className="divider text-white">Or</div>
                <button
                  onClick={regisrationGoogle}
                  className="btn btn-outline btn-accent text-x"
                >
                  <FcGoogle></FcGoogle>Google
                </button>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
