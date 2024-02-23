import React from "react";
import china from "../../../assets/logo/image 101 (1).png";
import canada from "../../../assets/logo/image 94.png";
import africa from "../../../assets/logo/image 102.png";
import more from "../../../assets/logo/+ MORE.png";
import CreateMonitor from "../CreateMonitor/CreateMonitor";
export default function Analytics() {
  return (
    <div className=" flex flex-col flex-wrap shadow p-4 ">
      <div className="my-4">
        <CreateMonitor />
      </div>

      <div  className=" flex justify-between">
      <div className="lg:w-full md:w-full w-[300px]">
     <div className="overflow-x-auto">
        <table class="table">
          <thead class=" uppercase border-b ">
            <tr>
              <th scope="col" class="px-6 py-3">
                <span className=" text-sm"> Status </span>
                <span>Monitor Name</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span className=""> Uptime</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span className="">Load Average</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span className=""> Locations</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span className=""> Type</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span className="text-textColor">Frequency</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b-[1px]">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="bg-green w-[14px] h-[14px] rounded-full"></div>
                  <div className="ml-4">
                    <span> Clodevo</span>
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">99%</button>
              </td>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6"> 230.ms</button>
              </td>
              <td class="px-6 py-4">
                <div className="flex">
                  <div className="relative left-1">
                    {" "}
                    <img src={china} alt="" />
                  </div>
                  <div className="absolute z-10 ml-6">
                    <img  className="w-[100%]" src={canada} alt="" />
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">HTTP</button>
              </td>
              <td class="px-6 py-4">
                <div className="flex gap-8">
                  <div>
                    <button className="btn host-btn btn-xs px-6">5.m</button>
                  </div>
                  <div>
                    <button className="btn host-btn btn-xs px-6">...</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="bg-red w-[14px] h-[14px] rounded-full"></div>
                  <div className="ml-4">
                    <span> Clodevo</span>
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">79%</button>
              </td>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">500.ms</button>
              </td>
              <td class="px-6 py-4">
                <div className="flex item-center">
                  <div className="relative left-1 ">
                    {" "}
                    <img  className="w-[100%]" src={china} alt="" />
                  </div>
                  <div className="absolute z-10 ml-4">
                    <img  className="w-[100%]" src={africa} alt="" />
                  </div>
                  <div className="absolute z-10 ml-8">
                    <img src={canada} alt="" />
                  </div>
                  <div className="flex">
                    <div className="absolute ml-10 mt-2">
                      <img  className="w-[100%]" src={more} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">HTTP</button>
              </td>
              <td class="px-6 py-4">
                <div className="flex gap-8">
                  <div>
                    {" "}
                    <button className="btn host-btn btn-xs px-6">5.m</button>
                  </div>
                  <div>
                    {" "}
                    <button className="btn host-btn btn-xs px-6">...</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="bg-yellowColor w-[14px] h-[14px] rounded-full"></div>
                  <div className="ml-4">
                    <span> Clodevo</span>
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">79%</button>
              </td>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">500.ms</button>
              </td>
              <td class="px-6 py-4">
                <div className="flex relative item-center">
                  <div className="absolute -top-4 ml-4">
                    <img className="w-[100%]" src={canada} alt="" />
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <button className="btn host-btn btn-xs px-6">HTTP</button>
              </td>
              <td class="px-6 py-4">
                <div className="flex gap-8">
                  <div>
                    <button className="btn host-btn btn-xs px-6">5.m</button>
                  </div>
                  <div>
                    <button className="btn host-btn btn-xs px-6">...</button>
                  </div>
                </div>
              </td>
            </tr>

            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="ml-4"></div>
                </div>
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex relative item-center"></div>
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex gap-8"></div>
              </td>
            </tr>
            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="ml-4"></div>
                </div>
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex relative item-center"></div>
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex gap-8"></div>
              </td>
            </tr>
            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="ml-4"></div>
                </div>
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex relative item-center"></div>
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex gap-8"></div>
              </td>
            </tr>
            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="ml-4"></div>
                </div>
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex relative item-center"></div>
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex gap-8"></div>
              </td>
            </tr>
            <tr class="border-b border-gray">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <div className="ml-4"></div>
                </div>
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex relative item-center"></div>
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <div className="flex gap-8"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     </div>
      </div>

      
      <div>
        <div className="my-4 flex  lg:flex-row flex-col lg:justify-between ">

          <div className="">
            <span className="text-gray-300 text-xs text-center my-4 lg:my-0">
              Showing data 1 to 8 of 256K entries
            </span>
          </div>

          <div className="flex gap-1 lg:gap-4">
            <div>
              <button className="btn host-btn btn-sm">
                <i class="fa-solid fa-angle-left"></i>
              </button>
            </div>
            <div>
              <button
                style={{ backgroundColor: "#5932EA" }}
                className="btn bg-button btn-sm"
              >
                1
              </button>
            </div>
            <div>
              <button className="btn host-btn btn-sm">2</button>
            </div>
            <div>
              <button className="btn host-btn btn-sm">3</button>
            </div>
            <div>
              <button className="btn host-btn btn-sm">4</button>
            </div>
            <div>
              <button className="btn host-btn btn-sm">...</button>
            </div>
            <div>
              <button className="btn host-btn btn-sm">40</button>
            </div>
            <div>
              <button className="btn host-btn btn-sm">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
