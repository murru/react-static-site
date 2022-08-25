import React from "react"
import ReactLogo from '../assets/react.svg'
import DownArrow from '../assets/down-arrow.png'
import { Link } from "react-router-dom"
import './navbar.scss'

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="nav-wrapper__nav layout-width">
        {/* Logotype */}
        <div className="logotype">
          <img src={ ReactLogo } alt="React spin logo" />
          <h1>ReactFacts</h1>
        </div>

        {/* Language action */}
        <button className="lang-action">
          <span>En</span>
          <img src={ DownArrow } alt="Down arrow" />
        </button>

        {/* Navigation links */}
        <div className="links">
          <Link to="/">Facts</Link>
          <Link to="/authors">Authors</Link>
        </div>
      </nav>
    </div>
  )
}