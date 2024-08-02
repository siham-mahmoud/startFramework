import React from 'react'

export default function About() {
  return (
   
    <section className='about bg-main h-69 md:p-48  p-20  '>
    <div className='text-center '>
        <h2 className='  header-1 uppercase font-bold mb-3 text-white '>about component</h2>
        <div className='flex  justify-center items-center mb-4'>
            <div className='bg-white  h-1 w-20'></div>
            <i className='fa-solid fa-star px-4 text-white'></i>
            <div className='bg-white  h-1 w-20'></div>
        </div>
        <div className='  md:flex text-justify md:gap-6 text-white  '>
           <p className='mb-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
</section>
  )
}
