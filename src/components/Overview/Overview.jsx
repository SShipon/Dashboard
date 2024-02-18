import React from "react";
import ContentTop from "../ContentTop/ContentTop";
import Rechart from "../Home/Rechart/Rechart";
import DataMonitorUi from "../Monitors/DataMonitorUi/DataMonitorUi";
import Banner from "../Home/Banner/Banner";
import Meta from "../Home/Meta/Meta";
import ChartCart from "../Home/Rechart/ChartCart";

export default function Overview() {
  return (
    <div className="main-content">
      <ContentTop />
      <div className="relative">
        <hr
          className="w-5/6 absolute right-0"
          style={{ border: "#E6EFF5 solid 1px" }}
        />
      </div>
       <Banner />
        <Meta></Meta>
        <ChartCart/> 
      <div className="my-8">
        {/* <Rechart /> */}
      </div>
    </div>
  );
}
