import rocket from '../../../assets/Banner/rocket-white.png'
import wealth from '../../../assets/Banner/wealth-creation (3).png'
export default function Banner() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      {/* Welcome & Rocket */}
      <div className='flex flex-col lg:flex-row gap-x-3 lg:gap-x-5 my-8 py-4 items-center'>
        <div className='flex gap-x-2 lg:basis-2/3 justify-between p-4 shadow-xl rounded-2xl'>
          <div className='font-bold text-xl pt-8 pl-2 md:pl-5 relative'>
            Welcome X
            <p className='absolute bottom-2 text-3xl font-bold'>&rarr;</p>
          </div>
          <div>
            <img src={rocket} alt="rocket" className='rounded-md' />
          </div>
        </div>
        {/* Wealth Creation */}
        <div className='p-4 shadow-xl rounded-2xl '>
          <div className='text-white rounded-2xl relative'>
            <img className='w-full' src={wealth} alt="wealth-creation" />
            <div>
              <h3 className='absolute left-4 top-2 font-bold text-xl pb-4 pt-2'>Lorem</h3>
              <p className='absolute left-4 top-12'>Lorem ipsum bla bla</p>
              <p className='absolute left-4 bottom-2 font-semibold text-lg'>Read More &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}