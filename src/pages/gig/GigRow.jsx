import React from "react";
import { AiFillDelete } from "react-icons/ai";
const GigRow = ({ extraStyle }) => {
  return (
    <div className={"flex " + extraStyle}>
      <span className="basis-1/5">
        <img
          className="w-8 h-8"
          src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </span>
      <span className="basis-1/5">Name</span>
      <span className="basis-1/5">Price</span>
      <span className="basis-1/5">Orders</span>
      <span className="basis-1/5">
        <AiFillDelete />
      </span>
    </div>
  );
};

export default GigRow;
