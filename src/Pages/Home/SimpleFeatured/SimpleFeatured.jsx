import {BiSolidNoEntry} from 'react-icons/bi'
const SimpleFeatured = () => {
    return (
      <div className=" md:mx-16 lg:mx-24 ">
        <div className="lg:p-12 p-10 bg-blue-500 my-16 grid lg:grid-cols-2 grid-cols-1 space-y-8  justify-between">
          {/* content */}
          <div className="space-y-3">
            <h4 className="text-white md:text-2xl text-base">
              <span className="font-bold">TalentBazaar</span> Online Marketplace
            </h4>
            <h3 className="text-white md:text-3xl text-xl font-bold">
              Discover an extraordinary online
            </h3>
            <h4 className="italic md:text-2xl text-base font-semibold text-white">
              in minutes
            </h4>
            <p className="text-white md:text-base text-sm  font-semibold">
              Curated by leading industry experts. Just add your listings
            </p>
            <button className="btn text-blue-600 md:text-base text-xs">
              Try Online Marketplace{" "}
              <BiSolidNoEntry></BiSolidNoEntry>
            </button>
          </div>
          {/* icon image */}
          <div className="grid md:grid-cols-3 grid-cols-1 mx-auto space-y-3 items-center justify-around">
            <img
              src="https://i.ibb.co/rxXs43X/11817413-4852466-remov0ebg-preview.png"
              alt=""
              className="w-[150px] h-[80px]"
            />
            <img
              src="https://i.ibb.co/SXtv5QX/93190756-removebg-preview.png"
              alt=""
              className="w-[100px]  h-[100px]"
            />
            <img
              src="https://i.ibb.co/2WPTzKZ/33772109-8109613-removeb0g-preview.png"
              alt=""
              className="w-[100px]  h-[100px]"
            />
          </div>
        </div>
      </div>
    );
};

export default SimpleFeatured;