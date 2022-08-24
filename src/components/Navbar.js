import React from "react"
import logo from '../img/logo.svg'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logotype">
          <img src={logo} className="react-logo" alt="React Logo" />
          <h3 className="text-logo">ReactFacts</h3>
        </div>
        <h4 className="nav-text">React Course - Project 1</h4>
      </nav>
    </div>
  )
}

export default Navbar