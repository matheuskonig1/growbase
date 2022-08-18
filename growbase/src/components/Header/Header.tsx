import React from "react";
import { environment } from "../../services/environment";
import { Link } from "react-router-dom";
import "./Header.css";

const Header:any = () => {
    return (
        <>
        <main className="d-flex flex-nowrap">
              <div className="col-lg-2 mysidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100">
              <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src="https://shiny-buttercream-377ac5.netlify.app/main-menu.png" alt="logo" height="40" />
                <span className="title">{environment.PRODUCT_NAME}</span>
              </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link active" aria-current="page">
                    <i className="bi bi-clipboard-data-fill me-3"></i>
                    Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/matheuskonig1/growbase" target="blank" className="nav-link text-white">
                    <i className="bi bi-github me-3"></i>
                    Github
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://api-tasks-list.herokuapp.com/docs/" target="blank" className="nav-link text-white">
                    <i className="bi bi-boxes me-3"></i>
                    Public API
                    </a>
                </li>
                <li>
                    <a href="https://growdev.com.br" target="blank" className="nav-link text-white">
                    <i className="bi bi-code-slash me-3"></i>
                    Growdev
                    </a>
                </li>
            </ul>
            <hr/>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>$username</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li className="nav-link">
                <Link to="/settings" className="dropdown-item">Configurações</Link>
                </li>
                <li className="nav-link"><Link to="/profile" className="dropdown-item">Perfil</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-link"><Link to="/logout" className="dropdown-item">Sair</Link></li>
            </ul>
            </div>
        </div>
  </main>
        </>
    )
}

export {Header};