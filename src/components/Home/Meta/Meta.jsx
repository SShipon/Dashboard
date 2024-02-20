import filter from "../../../assets/Banner/filter.png";
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
    <div className="flex flex-col  lg:flex-row gap-x-2 sm:gap-x-5 gap-y-12 my-8 py-4 items-center">
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
          </div>
        </div>
        <img src={path} alt="path" className="py-5" />
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 lg:gap-x-6 gap-y-6 mr-[25%] sm:mr-0">
        {/* Socials */}
        {socialData}
      </div>
    </div>
  );
}