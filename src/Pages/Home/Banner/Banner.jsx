import Navbar from "../../../Shared/Navbar/Navbar";
import "./Banner.css";
import {MdTravelExplore} from 'react-icons/md'

const Banner = () => {
  return (
    <div className="bannerImg h-[950px]">
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-2  items-center mx-10 md:mx-16 lg:mx-24 justify-between">
        {/* content part start */}
        <div className="lg:my-20 ">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-gray-300 font-playfair my-10 leading-tight">
            Empowering Your Job Search{" "}
            <span className="text-[#00d8ff]">or</span> Hiring Journey.
          </h1>
          <p className="text-sm text-gray-300 mb-8">
            Empower your job search or recruitment efforts with our versatile
            platform. Whether you are a job seeker looking for your next gig or
            an employer searching for top talent, we provide the tools and
            connections you need.
          </p>
          <button className="btn bg-[#00d8ff] border-none text-white hover:bg-[#ff9ec7]">
            Explore Opportunities <MdTravelExplore></MdTravelExplore>
          </button>
        </div>
        <div className="flex justify-end">
          <img
            src="https://i.ibb.co/Yf1jNcx/portrait-cheerful-young-man-smiling-pointing-finger-up-removebg-preview.png"
            alt=""
            className="border-[10px] rounded-full bg-[#3c8ef3] mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
