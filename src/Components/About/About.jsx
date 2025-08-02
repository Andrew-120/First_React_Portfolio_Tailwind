import React from 'react'
import styles from './About.module.css'

export default function About() {
  return <>
    {/* <div className={`container-fluid vh-100 d-flex justify-content-center align-items-center text-center flex-column mt-5 ${styles.bgColor}`}>
      <h2 className='text-white text-uppercase fs-1 fw-bolder mb-3'>About Component</h2>
       <div className='d-flex justify-content-center align-items-center mb-3'>
        <div className= 'bar'></div>
        <i className="fa-solid fa-star text-white mx-4"></i>
        <div className= 'bar'></div>
       </div>

      <div className="row px-5">
        <div className="col-md-6 ps-md-5">
          <p className='text-white text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 ps-md-5">
          <p className='text-white text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>   */}


       <div className={`min-h-screen flex flex-col justify-center items-center text-center mt-10 ${styles.bgColor}`}>
      <h2 className='text-white uppercase text-4xl font-extrabold mb-4'>About Component</h2>
       <div className='flex justify-center items-center mb-4 gap-x-3'>
        <div className= 'h-1 w-20 bg-white'></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className= 'h-1 w-20 bg-white'></div>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 px-5">
        <div>
          <p className='text-white text-left'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div>
          <p className='text-white text-left'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>  
  </>
}
