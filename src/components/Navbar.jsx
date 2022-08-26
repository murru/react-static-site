import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import classNames from "classnames"
import ReactLogo from '../assets/react.svg'
import DownArrow from '../assets/down-arrow.png'
import UpArrow from '../assets/up-arrow.png'
import './navbar.scss'

export default function Navbar() {
  const location = useLocation()
  const [showLangs, setShowLangs] = useState(false)
  const [selectedLang, setSelectedLang] = useState('En')
  const activePath = location.pathname
  const factsBarClasses = classNames('bottom-bar', { 'active-bottom-bar': activePath === '/' })
  const authorsBarClasses = classNames('bottom-bar', { 'active-bottom-bar': activePath === '/authors' })
  const engClasses = classNames('dg-50-text', { 'dg-75-text': selectedLang === 'En' })
  const esClasses = classNames('dg-50-text', { 'dg-75-text': selectedLang === 'Es' })
  let dropDownClasses = classNames('langs-wrapper__dropdown', { 'active-lang-menu': showLangs });
  let arrowImg = showLangs ? UpArrow : DownArrow

  function toggleLangs() { setShowLangs(!showLangs) }

  function handleChangeLang(lang) {
    setSelectedLang(lang)
    setShowLangs(false)
  }

  return (
    <div className="nav-wrapper">
      <nav className="nav-wrapper__nav layout-width">
        {/* Logotype */}
        <div className="logotype">
          <img src={ ReactLogo } alt="React spin logo" className="logotype__isotype" />
          <h1 className="lt-logo-text">ReactFacts</h1>
        </div>

        {/* Language action */}
        <div className="langs-wrapper">
          <button
            type="button"
            className="langs-wrapper__lang-btn dg-50-text"
            onClick={ toggleLangs }
          >
            <span>{ selectedLang }</span>
            <img src={ arrowImg } alt="Down arrow" className="arrow-img" />
          </button>
          <div className={ dropDownClasses }>
            <ul>
              <li>
                <a onClick={($evt) => handleChangeLang('En', $evt) } className={ engClasses }>English</a>
              </li>
              <li>
                <a onClick={($evt) => handleChangeLang('Es', $evt) } className={ esClasses }>Spanish</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation links */}
        <div className="links">
          <NavLink className="links__lk lg-25-text" to="/">
            Facts
            <div className={ factsBarClasses }></div>
          </NavLink>
          <NavLink className="links__lk lg-25-text" to="/authors">
            Authors
            <div className={ authorsBarClasses }></div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}