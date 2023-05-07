import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div style={{height:"56px"}}></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark mb-4">
    <div className="nas container" >
      <div className='navLinks firstNavlink'><NavLink  className="navbar-brand text-white navRes d-flex" to="/"><img className=' img-fluid' src="./images/navLogo.png" alt="" style={{height:"4vh"}} /> <p className='fw-lighter fs-6 px-2 my-auto'>Finder</p></NavLink></div>
      <button className="navLinks lastNavlink navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item navRes">
            <NavLink  className="nav-link navLinks lastNavlink text-white" to="/">Image Finder</NavLink>
          </li>
          <li className="nav-item navRes">
            <NavLink  className="nav-link navLinks secondNavlink text-white" to="./about">About</NavLink>
          </li>
          <li className="nav-item navRes">
            <NavLink  className="nav-link navLinks thirdNavlink text-white" to="./contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar