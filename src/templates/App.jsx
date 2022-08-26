import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import './app.scss'

export default function App() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
}