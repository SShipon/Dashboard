import React from 'react'
import rocket from '../../../assets/Banner/rocket-white.png'
import wealth from '../../../assets/Banner/wealth-creation (3).png'
export default function Banner() {
  return (
    
    <div className='mt-10'>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 items-center">
<div class="col-span-2 gap-2">
<div className='flex-1 md:flex-2/3 mb-4 md:mb-0'>
 <div className='flex justify-between lg:p-4  sm:p-0  shadow-xl rounded-2xl '>
   <div className='font-bold text-xl pt-8 pl-5 relative'>
     <span className='lg:text-4xl text-xs'>Welcome X</span>
     <p className='absolute bottom-2 text-3xl font-bold'>&rarr;</p>
   </div>
   <div>
     <img src={rocket} alt="rocket" className='rounded-md lg:w-full md:w-[250px] sm:w-[100%]' />
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
          </div>
        </div>
 
      </div>

    </div>
    </div>
   
    
  
 
  )
}




