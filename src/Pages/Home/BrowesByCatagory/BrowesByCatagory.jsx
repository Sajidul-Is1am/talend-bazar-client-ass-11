import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const BrowesByCatagory = () => {
  const tabTitle = (
    <>
      <div className="grid grid-cols-3 gap-5 text-white font-bold">
        <Tab className="bg-[#3280ee] p-4 rounded-lg ">Web Development</Tab>
        <Tab className="bg-[#3280ee] p-4 rounded-lg">Digital Marketing</Tab>
        <Tab className="bg-[#3280ee] p-4 rounded-lg">Graphics Design</Tab>
      </div>
    </>
  );

  return (
    <div>
      {/* heading start */}
      <div className="my-20 grid justify-center">
        <h3 className="lg:text-5xl text-3xl text-center font-bold">
          Browse By Category
        </h3>
      </div>
      {/* heading end */}
      <div className="text-center mx-auto my-20">
        <Tabs>
          <TabList className={"grid justify-center mb-28"}>
            {/* <Tab>Title 1</Tab>
            <Tab>Title 2</Tab> */}
            {tabTitle}
          </TabList>

          <TabPanel>
            <h2>Web Development</h2>
            <img
              src="https://i.ibb.co/vXXCm5k/20943546.jpg"
              alt=""
              className="w-full h-screen"
            />
          </TabPanel>
          <TabPanel>
            <h2>Degital Marketing</h2>
            <img
              src="https://i.ibb.co/gmKjG24/Animation-1699114680848.gif"
              alt=""
              className="w-auto h-auto mx-auto"
            />
          </TabPanel>
          <TabPanel>
            <h2>Graphics Design</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BrowesByCatagory;
