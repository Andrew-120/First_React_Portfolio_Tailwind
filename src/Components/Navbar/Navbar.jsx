import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";



export default function MyNavbar() {
  return <>
  {/* <nav className={`navbar navbar-expand-lg navbar-dark text-white fixed-top p-4 mb-5 ${styles.bgColor}`}>
  <div className="container">
    <NavLink className="navbar-brand text-uppercase fs-2 fw-bolder" to={''}>Start FrameWork</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className= {({isActive})=> isActive ? `rounded-3 nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-3 py-2 ${styles.hamada}` : `nav-link text-uppercase text-white fw-bold mt-3 mt-md-0`} aria-current="page"  to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={({isActive})=> isActive ? `rounded-3 nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-3 py-2 ${styles.hamada}` : `nav-link text-uppercase text-white fw-bold mt-3 mt-md-0`} to={'/portfolio'}>Portfolio</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={({isActive})=> isActive ? `rounded-3 nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-3 py-2 ${styles.hamada}` : `nav-link text-uppercase text-white fw-bold mt-3 mt-md-0`} to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> */}





  <Navbar
      fluid
      rounded
      className={` fixed top-0 left-0 w-full bg-gray-900 text-white px-7 py-2 z-50 shadow-md ${styles.bgColor}`}
    >
      <div className="flex w-full items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold uppercase tracking-wide text-white no-underline">
          Start Framework
        </NavLink>

        <div className="flex items-center gap-6">
          <NavbarToggle className="md:hidden" />

          <NavbarCollapse className=" md:flex md:flex-row md:gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                (isActive
                  ? `bg-green-600 rounded-md px-3 py-2 font-semibold text-white uppercase ${styles.hamada}`
                  : "px-3 py-2 font-semibold text-white uppercase hover:text-green-400") +
                " no-underline"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                (isActive
                  ? `bg-green-600 rounded-md px-3 py-2 font-semibold text-white uppercase ${styles.hamada}`
                  : "px-3 py-2 font-semibold text-white uppercase hover:text-green-400") +
                " no-underline"
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                (isActive
                  ? `bg-green-600 rounded-md px-3 py-2 font-semibold text-white uppercase ${styles.hamada}`
                  : "px-3 py-2 font-semibold text-white uppercase hover:text-green-400") +
                " no-underline"
              }
            >
              Contact
            </NavLink>
          </NavbarCollapse>
        </div>
      </div>
    </Navbar>
  </>
}
