import React from 'react'

export default function () {
  return (
    <>
       <div className='text-center py-10 '>
        <h2 className='uppercase font-bold mb-3 text-navy '>conatct section</h2>
        <div className='flex  justify-center items-center mb-4'>
            <div className='bg-navy  h-1 w-20'></div>
            <i className='fa-solid fa-star px-4 text-navy'></i>
            <div className='bg-navy  h-1 w-20'></div>
        </div>
        </div>

<div class=" max-w-lg md:max-w-3xl mx-auto py-10 px-5">
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-100 appearance-none          focus:outline-none focus:ring-0 focus:main-color peer" placeholder=" " required />
      <label for="floating_name" class="peer-focus:font-medium absolute text-base text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-focus:main-color     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName </label>
  </div>
  <div class="relative z-0 w-full mb-8 group">
      <input type="text" name="floating_age" id="floating_age" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-100 appearance-none          focus:outline-none focus:ring-0 focus:main-color peer" placeholder=" " required />
      <label for="floating_age" class="peer-focus:font-medium absolute text- text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-focus:main-color     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>
  <div class="relative z-0 w-full mb-8 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2  border-gray-100 appearance-none rounded-sm         focus:outline-none focus:ring-0 focus:main-color peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-base text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-focus:main-color     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail </label>
  </div>
  <div class="relative z-0 w-full mb-8 group">
      <input type="password" name="repeat_password" id="floating_password" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-100 appearance-none          focus:outline-none focus:ring-0 focus:main-color peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-base text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-focus:main-color     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> userPassword</label>
  </div>

  <button type="submit" class=" bg-main text-white font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">send message</button>
</div>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
