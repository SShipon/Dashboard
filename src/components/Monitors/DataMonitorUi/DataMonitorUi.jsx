import React from "react";
// first card

import icons1 from "../../../assets/Monitor/Frame.png";
// second card
import icons from "../../../assets/Monitor/Frame (1).png";

// last card
import icons2 from "../../../assets/Monitor/Img.png";

import DataMonitor from "./DataMonitor";
import ProgressiveLineChart from "../../Home/Meta/ProgressiveLineChart";
import GreenChart from "../Chart/GreenChart";
import RedChart from "../Chart/RedChart";
import YellowChart from "../Chart/YellowChart";
export default function DataMonitorUi() {
  const monitors = [
    {
      
      id: 1,
      name: "Total Monitors",
      title: "113",

      // Additional styles for the first card (index 0)
      style: {
        fontSize: "28px",
        color: "blue",
        // Add any other styles you want to customize
      },
      titleStyle: {
        fontSize: "36px",
        fontWeight: "900",
        textAlign: "center",
        color: "black",

        // Add any other title styles you want to customize
      },
    },
    
    {
      id: 2,
      img: icons1,
      name: "Healthy",
      title: "90",
      chart:<GreenChart />
    },
    {
      id: 3,
      img: icons,
      name: "Down",
      title: "8",
      chart:<RedChart />
    },
    {
      id: 4,
      img: icons2,
      name: "Pause",
      title: "15",
      chart:<YellowChart />
    },
  ];
  return (
    <div className="lg:my-10 my-20">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {monitors.map((monitor, index) => (
          <DataMonitor
            key={monitor.id}
            monitor={monitor}
            style={index === 0 ? monitor.style:null}
            titleStyle={monitor.titleStyle}
          />
        ))}
      </div>
    </div>
  );
}


/* style={index === 0 && monitor.style}
            titleStyle={monitor.titleStyle} */