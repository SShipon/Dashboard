import filter from "../../../assets/Banner/filter.png";
<<<<<<< HEAD
import meta_logo from "../../../assets/Banner/meta-logo.png";
import microsoft_logo from "../../../assets/Banner/microsoft-logo.png";
import google_logo from "../../../assets/Banner/google-logo.png";
import { Line } from "recharts/lib/cartesian/Line";
import moment from 'moment';
import LineComponent from "./LineComponent";
import ProgressiveLineChart from "./ProgressiveLineChart";
import PosititveChart from "./PositiveChart";

export default function Meta() {
  const data = {
    labels: [
      moment().subtract(5, 'days').format('MMM D'),
      moment().subtract(4, 'days').format('MMM D'),
      moment().subtract(3, 'days').format('MMM D'),
      moment().subtract(2, 'days').format('MMM D'),
      moment().subtract(1, 'days').format('MMM D'),
      moment().format('MMM D'),
    ],
    datasets: [
      {
        label: 'Curve',
        data: [10, 15, 12, 18, 14, 20],
        fill: false,
        borderColor: 'green',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // hide x-axis labels
      },
      y: {
        display: false, // hide y-axis labels
      },
    },
    plugins: {
      legend: {
        display: false, // hide legend
      },
      tooltip: {
        enabled: false, // disable tooltip
      },
    },
  };

  return (
    <div className="mt-10">
      <div>
        <div class="lg:flex justify-evenly lg:flex-row items-center">
          <div class="lg:basis-1/4">
            <div className="bg-gradient-to-br from-[#ffffff33] to-[#00a76f33] p-4 py-4 rounded-3xl mb-4 md:mb-0 md:basis-1/4">
              <div className="">
                <div className="flex justify-between text-textGreen">
                  <h5 className="font-bold text-xs pb-5">Global Uptime</h5>
                  <p className="pb-4">last 3 months</p>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-4xl pb-5 text-textGreen">
                    98.74%
                  </h3>
                  <img className="ml-auto w-1/5 " src={filter} alt="filter" />
                </div>
              </div>
              <LineComponent></LineComponent>
              {/* curve */}
              <div>
                <Line data={data} options={options} />
              </div>
              {/* curve */}
            </div>
          </div>

          <div class="lg:basis-1/9 lg:py-0 py-4">
            <div className="flex flex-col md:flex-row gap-x-6">
              {/* Meta */}
              <div className="mb-4 md:w-1/3">
                <div className="flex justify-around gap-x-5 items-center">
                  <div className="flex items-center gap-x-1.5">
                    <img src={meta_logo} alt="meta" />
                    <h5 className="font-bold text-xl">Meta</h5>
                  </div>
                  <ProgressiveLineChart></ProgressiveLineChart>
                </div>
                <div className="flex justify-around gap-x-3 pt-5">
                  <div>
                    <div className="pb-3">Uptime</div>
                    <div>Load Average</div>
                  </div>
                  <div>
                    <h6 className="font-bold pb-3">89%</h6>
                    <p className="text-rose-700">1200ms &darr;</p>
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
                  {/* <img className="w-2/5" src={meta_cloud} alt="meta" /> */}
                  <ProgressiveLineChart></ProgressiveLineChart>
                </div>
                <div className="flex justify-around gap-x-3 pt-5">
                  <div>
                    <div className="pb-3">Uptime</div>
                    <div>Load Average</div>
                  </div>
                  <div>
                    <h6 className="font-bold pb-3">89%</h6>
                    <p className="text-rose-700">1200ms &darr;</p>
                  </div>
                </div>
              </div>

              {/* Google */}
              <div className="md:w-1/3">
                <div className="flex justify-around gap-x-5 items-center">
                  <div className="flex items-center gap-x-1.5">
                    <img src={microsoft_logo} alt="meta" />
                    <h5 className="font-bold text-xl">Meta</h5>
                  </div>
                  <PosititveChart></PosititveChart>
                  {/* <img className="w-2/5" src={microsoft_cloud} alt="meta" /> */}
                </div>
                <div className="flex justify-around gap-x-3 pt-5">
                  <div>
                    <div className="pb-3">Uptime</div>
                    <div>Load Average</div>
                  </div>
                  <div>
                    <h6 className="font-bold pb-3">100%</h6>
                    <p className="text-red-600 text-emerald-500 ">
                      250ms <span className="text-emerald-500">&darr;</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="flex justify-around gap-x-5 items-center">
                  <div className="flex items-center gap-x-1.5">
                    <img className="" src={google_logo} alt="meta" />
                    <h5 className="font-bold text-xl">Meta</h5>
                  </div>
                  <ProgressiveLineChart></ProgressiveLineChart>
                </div>
                <div className="flex justify-around gap-x-3 pt-5">
                  <div>
                    <div className="pb-3">Uptime</div>
                    <div>Load Average</div>
                  </div>
                  <div>
                    <h6 className="font-bold pb-3">98.9%</h6>
                    <p className="text-rose-700">900ms &darr;</p>
                  </div>
                </div>
              </div>
            </div>
=======
import path from "../../../assets/Banner/global-uptime-path.svg";
import { socials } from "../../../data/data";
import right_arrow from '../../../assets/images/right-arrow.png';

export default function Meta() {
  const length = socials.length;

  const socialData = socials.map((social, index) => (
    <>
      <div className="mb-4 text-xs">
        <div className="flex justify-between gap-x-2 items-center  relative">
          <div className="flex items-center">
            <img src={social.logo_image} alt={social.title} />
            <h5 className="font-bold text-lg">{social.title}</h5>
          </div>
          <img className="w-1/3" src={social.cloud_image} alt={social.title} />
          {
            index === length - 1
            &&
            <img className="absolute -right-8 hidden lg:block" src={right_arrow} alt="right-arrow" />
          }
        </div>
        <div className="flex justify-between pt-5">
          <div>
            <div className="pb-3">Uptime</div>
            <div>Load Average</div>
          </div>
          <div>
            <h6 className="font-bold pb-3">{social.uptime}%</h6>
            <p className={`${social.average_loading_time < 500 ? 'text-green' : 'text-red'}`}>
              {social.average_loading_time}ms &darr;
            </p>
          </div>
        </div>
      </div>
    </>
  ))

  return (
    <div className="flex flex-col  lg:flex-row gap-x-2 sm:gap-x-5 gap-y-12 my-8 py-4 items-center justify-evenly">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-[#ffffff33] to-[#00a76f33] px-3 sm:px-6 py-4 rounded-3xl mb-4 md:mb-0 md:basis-1/4 mr-[25%] sm:mr-0">
        <div className="flex gap-x-1 sm:gap-x-3 items-center text-[#004b50]">
          <div>
            <h5 className="font-bold text-lg sm:text-xl pb-5">Global Uptime</h5>
            <h3 className="font-bold text-3xl sm:text-4xl pb-5">98.74%</h3>
          </div>
          <div className="px-5">
            <p className="pb-4">last 3 months</p>
            <img className="ml-auto w-1/4" src={filter} alt="filter" />
>>>>>>> 0b739471ccdc80a98d8089d0c58acb1fa072bcbb
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 lg:gap-x-6 gap-y-6 mr-[25%] sm:mr-0">
        {/* Socials */}
        {socialData}
      </div>
>>>>>>> 0b739471ccdc80a98d8089d0c58acb1fa072bcbb
    </div>
  );
}