import { Link } from "react-router-dom";
import {FcPrevious} from 'react-icons/fc'

const ErrorPage = () => {
    return (
      <div className="relative">
        <img
          src="https://i.ibb.co/Jn4bNty/21586054-Na-Nov-26.jpg"
          alt=""
          className="w-full h-screen "
        />

        <Link className="absolute top-[20%] left-[50%]" to={"/"}>
          <button className="btn  rounded-full bg-[#00d8ff]"><FcPrevious className=""></FcPrevious>Go Back</button>
        </Link>
      </div>
    );
};

export default ErrorPage;