import React from 'react'

export default function Footer() {
  return (
    <div>
    <section class="  ">
        <div className=' bg-navy  grid-cols-1 md:grid gap-10  md:grid-cols-3 p-10 text-center'>
            <div className='text-white p-4'>
                <h3 className='text-3xl uppercase font-medium pt-5 mb-2 '>Location</h3>
                <p className='mb-4'>2215 John Daniel Drive</p>
                <p className='mb-4'>Clark, MO 65243</p>

            </div>
            <div className='text-white p-4 '>
                <h3 className='text-3xl uppercase font-medium pt-5 mb-2'>About the web</h3>
                <div className=''>
                <i className='fa-brands fa-facebook mx-1 icon'></i>
    
                <i className='fa-brands fa-twitter mx-1 icon'></i>
                <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
                <i className='fa-solid fa-globe mx-1 icon'></i>
                    </div>        
            </div>
            <div className='text-white p-4 '>
                <h3 className='text-3xl uppercase font-medium pt-5 mb-2'>about freelancer</h3>
                <p className='mb-4'> Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>



        </div>
    </section>





    <footer class="bg-gray-800 text-white py-4  p-3">
        <div class="container mx-auto text-center mb-3 my-4">
            <p class="text-base "> Copyright © Your Website 2021</p>

        </div>
    </footer></div>
  )
}
