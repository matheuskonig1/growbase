import React from "react";
import { Link } from "react-router-dom";
import "./Heroes.css";

const Heroes:any = () => {
    return (
        <>
            <div className="container my-5">
                <div className="bg-dark row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 lh-1 text-light mb-5">Olá, sou o Growbase, mas pode me chamar de <span className="yellow">Grow</span>.</h1>
                        <p className="lead text-light">Seja bem-vindo ao Growbase, o seu sistema de lista de recados.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-8">
                            <Link to="/signup" className="btn btn-warning btn-lg px-4 me-md-2 fw-bold text-dark">Começar agora!</Link>
                        </div>
                    </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
                    <img className="rounded-lg-3" src="https://shiny-buttercream-377ac5.netlify.app/home.png" alt="" width="720"/>
                </div>
                </div>
            </div>
        </>
    )
}

export {Heroes};