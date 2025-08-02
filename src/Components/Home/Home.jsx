import React from 'react'
import avatar from '../../assets/images/avatar.svg'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
     {/* <div className= {`container-fluid vh-100 d-flex justify-content-center align-items-center text-center flex-column mt-5 ${styles.bgColor}`}>
      <div className='w-25'>
        <img src= {avatar} alt="avatar" className='img-fluid rounded-circle mb-3'/>
      </div>
       <h2 className="text-white text-uppercase fs-1 fw-bolder mb-3">Start Framework</h2>
       <div className='d-flex justify-content-center align-items-center mb-3'>
        <div className= 'bar'></div>
        <i className="fa-solid fa-star text-white mx-4"></i>
        <div className= 'bar'></div>
       </div>
        <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
    </div> */}

     <div className= {`min-h-screen flex flex-col justify-center items-center text-center mt-10 ${styles.bgColor}`}>
      <div className='w-1/4'>
        <img src= {avatar} alt="avatar" className='w-full rounded-full mb-4'/>
      </div>
       <h2 className="text-white uppercase text-4xl font-extrabold mb-4">Start Framework</h2>
       <div className='flex justify-center items-center gap-x-3 mb-4'>
        <div className= 'h-1 w-20 bg-white'></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className= 'h-1 w-20 bg-white'></div>
       </div>
        <p className="text-white text-lg">Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
