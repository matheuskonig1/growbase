import React from "react";
import { Link } from "react-router-dom";
import "./SignupForm.css";

const SignupForm:any = () => {
    return (
        <>
<div className="container bg-transparent">
                    <main className="form-signin w-100 mt-5 m-auto">
                      <form className='text-center'>
                        <img className="mb-4" src="https://shiny-buttercream-377ac5.netlify.app/main-menu.png" alt="" width="72"/>
                        <h1 className="h3 mb-3 text-white">Criar sua conta.</h1>
                        <div className="form-floating">
                          <input type="email" className="form-control bg-transparent text-white" id="floatingInput" placeholder="email@example.com"/>
                          <label className="text-white" htmlFor="floatingInput">Insira seu e-mail</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control bg-transparent text-white" id="floatingPassword" placeholder="Senha"/>
                          <label className="text-white" htmlFor="floatingPassword">Insira sua senha</label>
                        </div>
                        <div className="form-floating ">
                          <input type="password" className="form-control bg-transparent text-white" id="floatingCPassword" placeholder="Senha"/>
                          <label className="text-white" htmlFor="floatingCPassword">Confirme sua senha</label>
                        </div>
                        <a className="w-100 btn btn-lg btn-light mb-3" type="submit" onClick="store()">Criar conta</a>
                        <Link to="/login" className="link-primary">Já tenho uma conta.</Link>
                        <p className="mt-5 mb-3 text-muted">© Growbase Inc. 2022</p>
                      </form>
                    </main>
                    </div>
        </>
    )
}

export {SignupForm};