import React from "react";

const Add = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
      <h1 className="text-2xl font-formal">Add new Gig</h1>
      <div className="flex gap-x-8 ">
        <div className="flex flex-col basis-1/2 gap-y-4">
          <label
            className=" font-formal text-stone-400 font-semibold "
            htmlFor=""
          >
            Title
          </label>
          <input
            className="border-2 p-2"
            type="text"
            placeholder="e.g. I will do something I'm really good at"
          />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Category
          </label>
          <select className="border-2 p-2" name="cats" id="cats">
            <option value="design">Design</option>
            <option value="web">Web Development</option>
            <option value="animation">Animation</option>
            <option value="music">Music</option>
          </select>
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Cover Image
          </label>
          <input className="" type="file" />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Upload Images
          </label>
          <input type="file" multiple />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Description
          </label>
          <textarea
            className="flex-grow border-2 p-2 h-[200px]"
            name=""
            id=""
            placeholder="Brief descriptions to introduce your service to customers"
            cols="0"
            rows="16"
          ></textarea>
          <button className="p-2 bg-green-600 text-white font-formal font-semibold">
            Create
          </button>
        </div>
        <div className="flex flex-col gap-y-4 flex-grow">
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Service Title
          </label>
          <input
            className="p-2 border-2"
            type="text"
            placeholder="e.g. One-page web design"
          />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Short Description
          </label>
          <textarea
            className="border-2 p-2 h-[150px]"
            name=""
            id=""
            placeholder="Short description of your service"
            cols="30"
            rows="10"
          ></textarea>
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Delivery Time (e.g. 3 days)
          </label>
          <input className="border-2 p-2" type="number" />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Revision Number
          </label>
          <input className="border-2 p-2" type="number" />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Add Features
          </label>
          <input
            className="border-2 p-2"
            type="text"
            placeholder="e.g. page design"
          />
          <input
            className="border-2 p-2"
            type="text"
            placeholder="e.g. file uploading"
          />
          <input
            className="border-2 p-2"
            type="text"
            placeholder="e.g. setting up a domain"
          />
          <input
            className="border-2 p-2"
            type="text"
            placeholder="e.g. hosting"
          />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Price
          </label>
          <input className="border-2 p-2" type="number" />
        </div>
      </div>
    </div>
  );
};

export default Add;
