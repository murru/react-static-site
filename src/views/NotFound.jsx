import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <h1>NOT FOUND</h1>
            <Link className="links__lk dg-50-text" to="/">Go to home page</Link>
        </>
    )
}