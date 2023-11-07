import { BsReverseListColumnsReverse } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
const KnowledgeHub = () => {
  return (
    <div>
      <h3 className="lg:text-5xl text-3xl text-center font-bold lg:my-20 my-12 mt-20">
        Best Part Things
      </h3>
      {/* <p className=" text-justify">
        The Knowledge Hub is your gateway to a wealth of valuable insights,
        in-depth articles, and expert resources tailored to enrich your
        understanding of the products and services offered on our marketplace.
        Our mission is to empower users through ed ucation, boost our platforms
        search engine visibility, and solidify our reputation as a reliable
        source of industry knowledge.
      </p> */}
      <div className="md:mx-16 lg:mx-24 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between gap-14 bg-gray-100 rounded-t-2xl">
          <div className="lg:p-16 p-10 space-y-5">
            <div className="flex items-center gap-4">
              <BsReverseListColumnsReverse></BsReverseListColumnsReverse>
              <h4 className="lg:text-4xl text-xl font-bold text-[#3071c0]">
                User-Friendly Job Posting :
              </h4>
            </div>
            <div className="flex items-center gap-4 text-base font-semibold">
              <RxDot></RxDot>
              <h4>
                Easily post job circulars with a simple and intuitive interface.
              </h4>
            </div>
            <div className="flex items-center gap-4 text-base font-semibold">
              <RxDot></RxDot>
              <h4>
                Streamlined process for job creation, with options for detailed
                descriptions and requirements.
              </h4>
            </div>
            <div className="flex mx-auto">
              <img
                src="https://i.ibb.co/rkJ08mC/pic01.png"
                alt=""
                className="w-auto h-[200px] mx-auto"
              />
            </div>
          </div>
          <img
            src="https://i.ibb.co/ccBCtgJ/9798364-4261198.jpg"
            alt=""
            className="h-[500px] w-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between gap-14 bg-gray-100 rounded-b-2xl">
          <div className=" order-first">
            <img
              src="https://i.ibb.co/K5FrmY8/0026204215-24612-removebg-preview.png"
              alt=""
              className="h-[500px] w-full "
            />
          </div>
          <div className="lg:p-16 p-10 space-y-5 order-first ">
            <div className="flex items-center gap-4">
              <BsReverseListColumnsReverse></BsReverseListColumnsReverse>
              <h4 className="lg:text-4xl text-xl font-bold text-[#3071c0]">
                Project Management Tools :
              </h4>
            </div>
            <div className="flex items-center gap-4 text-base font-semibold">
              <RxDot></RxDot>
              <h4>
                Access tools to manage your projects, from job posting to
                project completion.
              </h4>
            </div>
            <div className="flex items-center gap-4 text-base font-semibold">
              <RxDot></RxDot>
              <h4>Keep all project-related information in one place.</h4>
            </div>
            <div className="flex mx-auto">
              <img
                src="https://i.ibb.co/bHh3yfX/2455804-3370137-PAK2-US-624-removebg-preview.png"
                alt=""
                className="w-auto h-[200px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
// https://i.ibb.co/S6WbZwj/6976388-4575.jpg
// https://i.ibb.co/wQd84kV/13549607-5287968.jpg
// https://i.ibb.co/B2cZwYm/7769804-3230320.jpg
// https://i.ibb.co/68T2V9M/11235559-10793.jpg
// https://i.ibb.co/vdXtjNf/content-statigy.jpg
