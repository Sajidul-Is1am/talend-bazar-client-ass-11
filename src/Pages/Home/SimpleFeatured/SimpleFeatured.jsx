const SimpleFeatured = () => {
    return (
      <div className="mx-10 md:mx-16 lg:mx-24 ">
        <div className="p-12 bg-blue-500 my-16 ">
          {/* content */}
          <div className="space-y-3">
            <h4 className="text-white text-2xl">
              <span className="font-bold">TalentBazaar</span> Online Marketplace
            </h4>
            <h3 className="text-white text-3xl font-bold">
              Discover an extraordinary online marketplace
            </h3>
            <h4 className="italic text-2xl font-semibold text-white">
              in minutes
            </h4>
            <p className="text-white text-base font-semibold">
              Curated by leading industry experts. Just add your listings
            </p>
          </div>
          {/* icon image */}
          <div>
              <img
                src="https://i.ibb.co/rxXs43X/11817413-4852466-remov0ebg-preview.png"
                alt=""
              />
          </div>
        </div>
      </div>
    );
};

export default SimpleFeatured;