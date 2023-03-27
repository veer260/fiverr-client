import React from "react";
import { Link } from "react-router-dom";
import GigRow from "../gig/GigRow";

const MyGigs = () => {
  return (
    <div className="py-8 max-w-6xl mx-auto ">
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Gigs</span>
        <span>
          <Link
            className="p-2 bg-green-500 hover:bg-green-600 font-semibold font-formal text-white rounded-md shadow-md "
            to="/add"
          >
            Add new Gig
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-y-4 mt-8">
        <GigRow extraStyle="font-semibold text-xl" />
        <GigRow />
        <GigRow />
        <GigRow />
        <GigRow />
      </div>
    </div>
  );
};

export default MyGigs;
