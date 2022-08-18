import React from "react";
import { environment } from "../../services/environment";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar:any = () => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark rounded">
              <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src="https://shiny-buttercream-377ac5.netlify.app/main-menu.png" alt="logo" height="40" />
                <span className="title"> {environment.PRODUCT_NAME}</span>
              </Link>
              <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/dashboard" className="btn btn-warning btn-lg px-4 me-md-2 fw-bold text-dark"> Entrar</Link></li>
              </ul>
            </header>
        </>
    )
}

export {Navbar};