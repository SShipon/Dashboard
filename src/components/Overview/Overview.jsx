import React from "react";
import ContentTop from "../ContentTop/ContentTop";
import Banner from "../Home/Banner/Banner";
import Meta from "../Home/Meta/Meta";
import ChartCart from "../Home/Rechart/ChartCart";
import Recent from "../Home/Recent/Recent";

export default function Overview() {
  return (
    <div className="main-content overflow-x-hidden">
      <ContentTop />
      <div className="relative">
        <hr
          className="w-5/6 absolute right-0"
          style={{ border: "#E6EFF5 solid 1px" }}
        />
      </div>
       <Banner />
        <Meta></Meta>
       <div className="py-8">
       <ChartCart/>
       </div>
      <div className="mt-32">
      <Recent />
      </div>
     
    </div>
  );
}
