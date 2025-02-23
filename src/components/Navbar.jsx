import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold mx-2" to="/">
          VAASTU
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-light"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/our-services">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Our Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project-drawings">
                  Project Drawings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
        </nav>
    </>
  )
}

