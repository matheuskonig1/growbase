import React from "react";
import "./Footer.css";

const Footer:any = () => {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Growbase, Inc</p>

                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="https://shiny-buttercream-377ac5.netlify.app/main-menu.png" alt="logo" height="40" />
                    </a>

                    <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="https://github.com/matheuskonig1/growbase" target="blank" className="nav-link px-2 text-muted">Github</a></li>
                    <li className="nav-item"><a href="https://growdev.com.br" target="blank" className="nav-link px-2 text-muted">Growdev</a></li>
                    <li className="nav-item"><a href="https://tasklist-frontend-react.herokuapp.com/login" target="blank" className="nav-link px-2 text-muted">Real Project</a></li>
                    <li className="nav-item"><a href="https://api-tasks-list.herokuapp.com/docs/" target="blank" className="nav-link px-2 text-muted">API</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export {Footer};