import React from 'react';
import CircleComponent from './CircleComponent';
import Rechart from './Rechart';

export default function ChartCart() {
  return (
    <div className="mt-10">
      <div>
        <div class="lg:flex lg:flex-row justify-evenly">
          <div class="lg:basis-1/3 shadow-2xl pl-4 pt-0 pr-4 pb-4 rounded-3xl">
            <h6 className=" font-bold text-2xl">Total Monitors</h6>
            <div className="flex justify-evenly sm:items-center">
              <div>
                <div className="py-8">
                  <div className="flex items-center gap-2">
                    <div className="bg-green w-[7px] h-[7px] rounded-full"></div>
                    <span className="font-bold text-sm">Down Monitors</span>
                  </div>
                  <span className="font-extrabold mx-4"> 120</span>
                </div>
                <div className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-red w-[7px] h-[7px] rounded-full"></div>
                    <span className="font-bold">Maintenance</span>
                  </div>
                  <span className="font-extrabold mx-4"> 25</span>
                </div>
                <div className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellowColor w-[7px] h-[7px] rounded-full"></div>
                    <span className="font-bold">Healthy Monitors</span>
                  </div>
                  <span className="font-extrabold mx-4">45</span>
                </div>
              </div>

              <div className='h-[300px]'>
                <CircleComponent></CircleComponent>
              </div>
            </div>
          </div>

          <div class="lg:basis-1/9 h-[100px]">
            <Rechart />
          </div>
        </div>
      </div>
    </div>
  );
}


