import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Facts from "../views/Facts"
import Authors from "../views/Authors"

export default function App() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Facts />} />
            <Route path="/authors" element={<Authors />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}