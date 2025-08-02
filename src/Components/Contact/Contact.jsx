import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className={`uppercase text-4xl font-extrabold mb-4 ${styles.tColor}`}>Contact Section</h2>
        <div className="flex justify-center items-center mb-4 gap-x-3">
          <div className={`h-1 w-20 bg-current ${styles.tColor}`}></div>
          <i className={`fa-solid fa-star ${styles.tColor}`}></i>
          <div className= {`h-1 w-20 bg-current ${styles.tColor}`}></div>
        </div>

        <form className="w-1/2 text-left">
          <input type="text" placeholder="userName" className="w-full px-2 py-2 mb-8 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400 bg-transparent text-gray-800 focus:outline-none transition-all duration-300" />
          <input type="number" placeholder="userAge" className="w-full px-2 py-2 mb-8 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400 bg-transparent text-gray-800 focus:outline-none transition-all duration-300" />
          <input type="email" placeholder="userEmail" className="w-full px-2 py-2 mb-8 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400 bg-transparent text-gray-800 focus:outline-none transition-all duration-300" />
          <input type="password" placeholder="userPassword" className="w-full px-2 py-2 mb-4 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400 bg-transparent text-gray-800 focus:outline-none transition-all duration-300" />
          <button className= {`px-6 py-2 text-white text-center rounded-md ${styles.btnColor}`}>Send Message</button>
        </form>
      </div>
    </>
  );
}
