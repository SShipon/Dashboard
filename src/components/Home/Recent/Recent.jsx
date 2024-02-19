import React from 'react';
import Shopify from '../../../assets/Banner/shopify-logo.png'
import Spotify from '../../../assets/Banner/spotify-logo.png'
import Slack from '../../../assets/Banner/slack-logo.png'
import Atlassian from '../../../assets/Banner/atlassian-logo.png'
import canada from '../../../assets/Banner/canada.png'
import china from '../../../assets/Banner/china.png'
import South from '../../../assets/Banner/south-africa.png'
import ball from '../../../assets/Banner/bell-green.png'
import red from '../../../assets/Banner/bell-red.png'
const Recent = () => {
  return (
 
    <div className='mt-10'>
    <div className="recent-container flex flex-col lg:flex-row justify-between items-center gap-2">
      <div className="recent-monitors-left flex justify-between flex-col shadow-lg p-4 rounded-lg basis-7/12">
        <div className="recent-monitors-box flex justify-between ">
          <div>
            <h1 className="text-[16px] font-bold leading-6 tracking-tight text-left text-[#252F40]">
              Recent Monitors
            </h1>
          </div>
          <div className="w-28 h-8 border border-[#CB0C9F] rounded-lg text-[#CB0C9F] font-semibold leading-7 tracking-tight text-center">
            <button>See More</button>
          </div>
        </div>
        <div className=" flex justify-between">
          <div className="lg:w-full md:w-full w-[300px]">
            <div className="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Locations</th>
                    <th>Load Average</th>
                    <th>Uptime</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="flex gap-5 items-center">
                      <img src={Shopify} alt="" />
                      <h2>Shopify</h2>
                    </td>
                    <td class="px-6 py-4">
                      <div className="flex">
                        <div className="relative left-1">
                          {' '}
                          <img src={china} alt="" />
                        </div>
                        <div className="absolute z-10 ml-6">
                          <img src={canada} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>230 ms</td>
                    <td>
                      <h3>60%</h3>
                      <progress
                        className="progress progress-warning w-56 h-1"
                        value="60"
                        max="100"
                      ></progress>
                    </td>
                  </tr>

                  <tr>
                    <td className="flex gap-5 items-center">
                      <img src={Atlassian} alt="" />
                      <h2>Atlassian</h2>
                    </td>
                    <td class="px-6 py-4">
                      <div className="flex">
                        <div className="relative left-1">
                          {' '}
                          <img src={South} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>300 ms</td>
                    <td>
                      <h3>10%</h3>
                      <progress
                        className="progress progress-error w-56 h-1"
                        value="10"
                        max="100"
                      ></progress>
                    </td>
                  </tr>

                  <tr>
                    <td className="flex gap-5 items-center">
                      <img src={Slack} alt="" />
                      <h2>Slack</h2>
                    </td>
                    <td class="px-6 py-4">
                      <div className="flex">
                        <div className="relative left-1">
                          {' '}
                          <img src={South} alt="" />
                        </div>
                        <div className="absolute z-10 ml-6">
                          <img src={canada} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>250 ms</td>
                    <td>
                      <h3>100%</h3>
                      <progress
                        className="progress progress-success w-56 h-1"
                        value="100"
                        max="100"
                      ></progress>
                    </td>
                  </tr>

                  <tr>
                    <td className="flex gap-5 items-center">
                      <img src={Spotify} alt="" />
                      <h2>Shopify</h2>
                    </td>
                    <td class="px-6 py-4">
                      <div className="flex">
                        <div className="relative left-1">
                          {' '}
                          <img src={canada} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>100 ms</td>
                    <td>
                      <h3>100%</h3>
                      <progress
                        className="progress progress-success w-56 h-1"
                        value="100"
                        max="100"
                      ></progress>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="incidents-history-right flex justify-between flex-col shadow-lg p-7 rounded-lg basis-4/12 h-auto">
        <div className="incidents-history-box flex justify-between gap-5 md:w-[400px] w-[300px]">
          <div>
            <h1 className="text-[16px] font-bold leading-6 tracking-tight text-left text-[#252F40]">
              Incidents History{' '}
            </h1>
            <h2 className="text-base font-normal leading-5 tracking-tight text-left text-gray-700 mt-2">
              <i class="fa-solid fa-arrow-up text-[#82D616]"></i>{' '}
              <span className="text-[#67748E] font-semibold leading-5 tracking-tight text-left mr-1">
                24%
              </span>{' '}
              this month
            </h2>
          </div>
          <div className="w-28 h-8 border border-[#CB0C9F] rounded-lg text-[#CB0C9F] font-semibold leading-7 tracking-tight text-center">
            <button>See More</button>
          </div>
        </div>
        <div className="incidents-history-box1 flex flex-col gap-6 mt-12 mb-24">
          <div className="s-up flex justify-around ">
            <div>
              <h3>Shopify UP</h3>
              <h4>09 JUN 7:20 PM</h4>
            </div>
            <div>
              <img src={ball} alt="" />
            </div>
          </div>
          <div className="s-down flex justify-around">
            <div>
              <h3>Shopify Down</h3>
              <h4>08 JUN 12:20 PM</h4>
            </div>
            <div>
              <img src={red} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Recent;