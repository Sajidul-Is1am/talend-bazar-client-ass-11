const BidReqItem = ({ items }) => {
  const { beddingprice, deadline, jobtitle, beadingmail } = items;
  return (
    <div>
      <div className="grid grid-cols-6 justify-between text-center bg-gray-200 hover:bg-gray-300 py-2 items-center border my-1">
        <td className="font-bold">{jobtitle}</td>
        <td className="">{beadingmail}</td>
        <td className="">{deadline}</td>
        <td className="">{beddingprice} ৳</td>
        <td className="">
          <span className="font-bold">Status</span> : Pending
        </td>
        <div className="flex flex-col">
          <td className="">
            <button className="btn">Accept</button>
          </td>
          <td className="">
            <button className="btn">Reject</button>
          </td>
        </div>
      </div>
    </div>
  );
};
export default BidReqItem;
