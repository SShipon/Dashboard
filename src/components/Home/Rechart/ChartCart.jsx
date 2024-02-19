import React from "react";
import elipsis from "../../../assets/Banner/elipsis.png";
import Rechart from "./Rechart";

export default function ChartCart() {
  return (
    <div className="lg:flex">
    <div class="lg:flex lg:flex-row">
   <div class="lg:basis-1/3 shadow-2xl pl-4 pt-0 pr-4 pb-4 rounded-3xl">
  
          <h6 className=" font-bold text-2xl">Total Monitors</h6>
         <div className="flex justify-evenly sm:items-center">
         <div>
         <div className="py-8">
          <div className="flex items-center gap-2">
           <div className="bg-green w-[7px] h-[7px] rounded-full"></div>
            <span className="font-bold text-sm">Down Monitors</span>
          </div>
        <span className="font-extrabold mx-4">  120</span>
          </div>
          <div className="py-2">
          <div className="flex items-center gap-2">
           <div className="bg-red w-[7px] h-[7px] rounded-full"></div>
            <span className="font-bold">Maintenance</span>
          </div>
      <span className="font-extrabold mx-4">   25</span>
          </div>
          <div className="py-2">
          <div className="flex items-center gap-2">
           <div className="bg-yellowColor w-[7px] h-[7px] rounded-full"></div>
            <span className="font-bold">Healthy Monitors</span>
          </div>
        <span className="font-extrabold mx-4">45</span>
          </div>
         </div>
         <div>
            <img className="w-[150px] h-[150px]" src={elipsis} alt="" srcset="" />
         </div>
         </div>
        </div>

      <div class="lg:basis-1/9">
      <Rechart/>
   </div>
   </div>
 </div>

  );
}



/* 
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
         <div className="text-4xl">Top 5 Latencies</div>
              <div>
                <button>1H</button>
                <button>1H</button>
                <button>1H</button>
                <button>1w</button>
             
              </div>
            <img className="w-[150px] h-[150px]" src={elipsis} alt="" srcset="" />
         </div>
         </div>
         
        </div>


*/