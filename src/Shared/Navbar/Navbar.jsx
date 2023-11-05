// name+logo,Home,Add job,My posted jobs,My Bids,Bid
// Requests,user profile picture and user name and Register/login

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  console.log(user);

  const logOutSubmit = () => {
    handleLogOut()
      .then(() => {
        // console.log(res.user)
        toast.success("Successfully LogOut!");
      })
      .catch((error) => {
        // console.log(error.message)
        toast.error(error.message);
      });
  };

  const navlink = (
    <>
      <div className="lg:flex lg:flex-row lg:gap-10">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/add-job"}>Add Job</NavLink>
        </li>
        <li>
          <NavLink to={"/my-posted-job"}>My Posted Job</NavLink>
        </li>
        <li>
          <NavLink to={"/my-bids"}>My Bids</NavLink>
        </li>
        <li>
          <NavLink to={"/bid-request"}>Bid Requests</NavLink>
        </li>
      </div>
    </>
  );

  // background: linear-gradient(180deg,#eaf8ff,#f6f6ff);

  return (
    <div className="  text-white py-7">
      <div className="flex justify-between items-center mx-10 md:mx-16 lg:mx-24">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold text-white">
            <img src="https://i.ibb.co/QnKWGMN/logo-white-small.png" alt="" />
            TalentBazaar.com
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="">
          {user ? (
            <NavLink to={"/login"}>
              <button onClick={logOutSubmit} className="btn">
                LogOut
              </button>
            </NavLink>
          ) : (
            <NavLink to={"/login"}>
              <button className="btn">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
