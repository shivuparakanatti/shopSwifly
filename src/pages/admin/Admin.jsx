import React from "react";
import { BiUserCircle } from "react-icons/bi";
import AddProducts from "../../components/AddProducts";

const Admin = () => {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-5 bg-slate-200 min-h-screen ">
        

        <div className="flex flex-col items-center justify-center px-20 py-10 text-white text-2xl w-full bg-blue-500 ">
        <BiUserCircle />
        <h1>Name</h1>
        </div>

        <div className="flex flex-col items-start justify-start px-2 gap-4">
          <button className="border-b-2 border-black  hover:text-blue-900 text-xl">Home</button>
          <button className="border-b-2 border-black  hover:text-blue-900 text-xl">View Products</button>
          <button className="border-b-2 border-black  hover:text-blue-900 text-xl">Add Products</button>
        </div>

      </div>
      <div>
        <AddProducts/>
      </div>
    </div>
  );
};

export default Admin;
