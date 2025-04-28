import React from 'react'
import {Link} from 'react-router-dom'
import EmpDtl from './EmpDtl'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark p-3">
    <Link to="#" className="navbar-brand ">
      MyBookApp
    </Link>

    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link fs-5">Employee-Lists</Link>
      </li>
      <li className="nav-item">
        <Link to="/empLin" className="nav-link fs-5">Add-Employee</Link>
      </li>
      </ul>
      </nav>
  )
}

export default Navbar
