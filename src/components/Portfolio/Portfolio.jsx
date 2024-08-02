import React from 'react'
import port3 from '../../assets/imgs/port3.png'
import poert1 from '../../assets/imgs/poert1.png'
import port2 from '../../assets/imgs/port2.png'
export default function Portfolio() {
  return (
    <>
      <div className='py-10'>
        <h2 className='uppercase font-bold my-3  text-center text-navy '> portfolio component</h2>
        <div className='flex  justify-center items-center mb-4'>
            <div className='bg-navy  h-1 w-20'></div>
            <i className='fa-solid fa-star px-4 text-navy'></i>
            <div className='bg-navy  h-1 w-20'></div>
        </div>
      </div>


      <div className=' grid px-4 py-16 gap-10  grid-cols-1 sm:grid-cols-2 sm:px-6  lg:grid-cols-3 lg:px-36 '>
        <div className=' z-0 relative'><img src={poert1} alt="" className='w-full rounded-md' />
          <div className="overlay  absolute start-0 w-full top-0 h-full flex justify-center items-center"><i  className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>






          
          <div className=' z-0 relative'><img src={port2} alt="" className='w-full rounded-md' />
          <div className="overlay  absolute start-0 w-full top-0 h-full flex justify-center items-center"><i  className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className=' z-0 relative'><img src={port3} alt="" className='w-full rounded-md' />
          <div className="overlay  absolute start-0 w-full top-0 h-full flex justify-center items-center"><i  className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className=' z-0 relative'><img src={poert1} alt="" className='w-full rounded-md' />
          <div className="overlay  absolute start-0 w-full top-0 h-full flex justify-center items-center"><i  className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className=' z-0 relative'><img src={port2} alt="" className='w-full rounded-md' />
          <div className="overlay  absolute start-0 w-full top-0 h-full flex justify-center items-center"><i  className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>
          <div className=' z-0 relative'><img src={port3} alt="" className='w-full rounded-md' />
          <div className="overlay  absolute start-0 w-full top-0 h-full flex justify-center items-center"><i  className="text-white fa-solid fa-plus fa-6x"></i></div>
          </div>


      </div>

    </>
  )
}
