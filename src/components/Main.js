import React from "react"
import '../css/main.css'

function Main() {
  return (
    <div className="main-wrapper">
      <h1 className="title">Fun facts about React</h1>
      <ul className="facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Main