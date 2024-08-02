import React from 'react'
import avatar from'../../assets/imgs/avatar.svg'

export default function Home() {
  return (
    <section>
    <div className='text-center bg-main  p-24 '>
   <img src={avatar} alt="" className='w-60 mb-8 inline-block align-middle' />
        <h2 className='uppercase font-bold mb-3 text-white '> start FrameWork</h2>
        <div className='flex  justify-center items-center mb-4'>
            <div className='bg-white  h-1 w-20'></div>
            <i className='fa-solid fa-star px-4 text-white'></i>
            <div className='bg-white  h-1 w-20'></div>
        </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
</section>

  )
}
