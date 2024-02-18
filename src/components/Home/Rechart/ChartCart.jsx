import React from "react";
import elipsis from "../../../assets/Banner/elipsis.png";
import Rechart from "./Rechart";
export default function ChartCart() {
  return (
    <div className="mr-20">
      <div className="lg:flex items-center">
         
        <div className="lg:w-2/6 shadow-2xl rounded font-semibold px-4 pb-10">
          <h6 className="lg:mx-3 my-4 sm:px-4 sm:py-4 lg:px-1 lg:py-1 font-bold text-2xl">Total Monitors</h6>
         <div className="flex justify-evenly sm:items-center">
         <div>
         <div className="py-2">
          <div className="flex items-center gap-2">
           <div className="bg-green w-[7px] h-[7px] rounded-full"></div>
            <span className="font-bold">Down Monitors</span>
          </div>
        <span className="font-extrabold">  120</span>
          </div>
          <div className="py-2">
          <div className="flex items-center gap-2">
           <div className="bg-red w-[7px] h-[7px] rounded-full"></div>
            <span className="font-bold">Maintenance</span>
          </div>
      <span className="font-extrabold">   25</span>
          </div>
          <div className="py-2">
          <div className="flex items-center gap-2">
           <div className="bg-yellowColor w-[7px] h-[7px] rounded-full"></div>
            <span className="font-bold">Healthy Monitors</span>
          </div>
        <span className="font-extrabold">45</span>
          </div>
         </div>
         <div>
            <img className="w-[150px] h-[150px]" src={elipsis} alt="" srcset="" />
         </div>
         </div>
         
        </div>

        {/* Right side with 4/6 width on large screens */}
        <div className="lg:w-4/6">
          <Rechart />
        </div>
      </div>
    </div>
  );
}
