import React from "react";
import filter from "../../../assets/Banner/filter.png";
import path from "../../../assets/Banner/global-uptime-path.svg";
import meta_logo from "../../../assets/Banner/meta-logo.png";
import meta_cloud from "../../../assets/Banner/meta-cloud.png";
import microsoft_logo from "../../../assets/Banner/microsoft-logo.png";
import microsoft_cloud from "../../../assets/Banner/microsoft-cloud.png";
import google_logo from "../../../assets/Banner/google-logo.png";
import google_cloud from "../../../assets/Banner/google-cloud.png";
import right_arrow from "../../../assets/Banner/right-arrow.png";
export default function Meta() {
  return (
    <div className="flex flex-col md:flex-row gap-x-5 m-8 p-4 items-center">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-[#ffffff33] to-[#00a76f33] p-8 py-4 rounded-3xl mb-4 md:mb-0 md:basis-1/4">
        <div className="flex gap-x-4 items-center text-[#004b50]">
          <div>
            <h5 className="font-bold text-xl pb-5">Global Uptime</h5>
            <h3 className="font-bold text-4xl pb-5">98.74%</h3>
          </div>
          <div className="px-5">
            <p className="pb-4">last 3 months</p>
            <img className="ml-auto w-1/4" src={filter} alt="filter" />
          </div>
        </div>
        <img src={path} alt="path" className="py-5" />
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row gap-x-6">
        {/* Meta */}
        <div className="mb-4 md:w-1/3">
          <div className="flex justify-around gap-x-5 items-center">
            <div className="flex items-center gap-x-1.5">
              <img src={meta_logo} alt="meta" />
              <h5 className="font-bold text-xl">Meta</h5>
            </div>
            <img className="w-2/5" src={meta_cloud} alt="meta" />
          </div>
          <div className="flex justify-around gap-x-3 pt-5">
            <div>
              <div className="pb-3">Uptime</div>
              <div>Load Average</div>
            </div>
            <div>
              <h6 className="font-bold pb-3">89%</h6>
              <p className="text-red-600">1200ms &darr;</p>
            </div>
          </div>
        </div>

        {/* Microsoft */}
        <div className="mb-4 md:w-1/3">
          <div className="flex justify-around gap-x-5 items-center">
            <div className="flex items-center gap-x-1.5">
              <img src={meta_logo} alt="meta" />
              <h5 className="font-bold text-xl">Meta</h5>
            </div>
            <img className="w-2/5" src={meta_cloud} alt="meta" />
          </div>
          <div className="flex justify-around gap-x-3 pt-5">
            <div>
              <div className="pb-3">Uptime</div>
              <div>Load Average</div>
            </div>
            <div>
              <h6 className="font-bold pb-3">89%</h6>
              <p className="text-red-600">1200ms &darr;</p>
            </div>
          </div>
        </div>

        {/* Google */}
        <div className="md:w-1/3">
          <div className="flex justify-around gap-x-5 items-center">
            <div className="flex items-center gap-x-1.5">
              <img src={meta_logo} alt="meta" />
              <h5 className="font-bold text-xl">Meta</h5>
            </div>
            <img className="w-2/5" src={meta_cloud} alt="meta" />
          </div>
          <div className="flex justify-around gap-x-3 pt-5">
            <div>
              <div className="pb-3">Uptime</div>
              <div>Load Average</div>
            </div>
            <div>
              <h6 className="font-bold pb-3">89%</h6>
              <p className="text-red-600">1200ms &darr;</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="flex justify-around gap-x-5 items-center">
            <div className="flex items-center gap-x-1.5">
              <img src={meta_logo} alt="meta" />
              <h5 className="font-bold text-xl">Meta</h5>
            </div>
            <img className="w-2/5" src={meta_cloud} alt="meta" />
          </div>
          <div className="flex justify-around gap-x-3 pt-5">
            <div>
              <div className="pb-3">Uptime</div>
              <div>Load Average</div>
            </div>
            <div>
              <h6 className="font-bold pb-3">89%</h6>
              <p className="text-red-600">1200ms &darr;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
