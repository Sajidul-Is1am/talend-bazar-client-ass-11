const BidsItem = ({ items }) => {

    const {deadline,jobtitle,beadingmail} = items


  return (
    <div>
      <p>{deadline}</p>
      <p>{jobtitle}</p>
      <p>{beadingmail}</p>
    </div>
  );
};

export default BidsItem;
