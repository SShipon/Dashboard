import React from 'react'
import rocket from '../../../assets/Banner/rocket-white.png'
import wealth from '../../../assets/Banner/wealth-creation (3).png'
export default function Banner() {
  return (
<<<<<<< HEAD
    
    <div className='mt-10'>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 items-center">
<div class="col-span-2 gap-2">
<div className='flex-1 md:flex-2/3 mb-4 md:mb-0'>
 <div className='flex justify-between lg:p-4  p-0  shadow-xl rounded-2xl '>
   <div className='font-bold text-xl pt-8 p-2 relative'>
     <span className='lg:text-4xl text-xs'>Welcome X</span>
     <p className='absolute bottom-2 text-3xl font-bold'>&rarr;</p>
   </div>
   <div>
     <img src={rocket} alt="rocket" className='rounded-md lg:w-full md:w-[250px] w-[100%]' />
   </div>
 </div>

</div>

</div>
    <div class="lg:col-span-1 col-span-2 shadow-2xl lg:p-4 rounded-2xl p-2  ">
    <div className='text-white rounded-2xl relative  '>
          <img src={wealth} alt="wealth-creation" className='lg:w-[1000px] lg:h-[220px] w-[100%] h-[auto]' />
          <div className='absolute left-4 top-2 px-2'>
            <h3 className='font-bold text-xl pb-2'>Lorem</h3>
            <p>Lorem ipsum bla bla</p>
            <p className='font-semibold absolute lg:-bottom-36 -bottom-24 text-lg mt-2'>Read More &rarr;</p>
=======
    <div className='max-w-[1280px] mx-auto'>
      {/* Welcome & Rocket */}
      <div className='flex flex-col lg:flex-row gap-x-3 lg:gap-x-5 my-8 py-4 justify-evenly items-center'>
        <div className='flex gap-x-2 lg:basis-2/3 justify-between p-4 shadow-xl rounded-2xl'>
          <div className='font-bold text-xl pt-8 pl-2 md:pl-5 relative'>
            Welcome X
            <p className='absolute bottom-2 text-3xl font-bold'>&rarr;</p>
          </div>
          <div>
            <img src={rocket} alt="rocket" className='rounded-md ' />
          </div>
        </div>
        {/* Wealth Creation */}
        <div className='p-4 shadow-xl rounded-2xl'>
          <div className='text-white rounded-2xl relative'>
            <img src={wealth} alt="wealth-creation" />
            <div>
              <h3 className='absolute left-4 top-2 font-bold text-xl pb-4 pt-2'>Lorem</h3>
              <p className='absolute left-4 top-12'>Lorem ipsum bla bla</p>
              <p className='absolute left-4 bottom-2 font-semibold text-lg'>Read More &rarr;</p>
            </div>
>>>>>>> 0b739471ccdc80a98d8089d0c58acb1fa072bcbb
          </div>
        </div>
      </div>
    </div>
  )
}




