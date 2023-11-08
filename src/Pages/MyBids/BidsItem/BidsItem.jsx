const BidsItem = ({ items }) => {
  const { deadline, jobtitle, beadingmail } = items;

  return (
    <div className="grid grid-cols-5 justify-between text-center bg-gray-200 hover:bg-gray-300 py-2 items-center my-1">
      <td className="font-bold">{jobtitle}</td>
      <td className="">{beadingmail}</td>
      <td className="">{deadline}</td>
      <td className="">
        {" "}
        <span className="font-bold">Status :</span> Pending
      </td>
      <td className="">
        <button className="btn">Complete</button>
      </td>
    </div>
  );
};

export default BidsItem;
