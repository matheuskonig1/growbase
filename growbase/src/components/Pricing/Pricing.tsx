import React from "react";
import "./Pricing.css";

const Pricing:any = () => {
    return (
        <>
            <h2 className="pb-2 text-light display-4">Conheça nossos <span className="yellow">Planos</span></h2>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm bg-dark">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal text-light">Free</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title text-light">R$0,00<small className="text-muted fw-light">/mês</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li className="text-light">10 recados inclusos.</li>
                        <li className="text-light">Suporte via e-mail.</li>
                        <li className="text-light">Acesso ao HelpDesk.</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-warning">Sign up for free</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm bg-dark">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal text-light">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title text-light">R$10,00<small className="text-muted fw-light">/mês</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li className="text-light">100 recados inclusos.</li>
                        <li className="text-light">Suporte prioritário via e-mail e whatsapp.</li>
                        <li className="text-light">Acesso ao HelpDesk.</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-warning">Iniciar agora!</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-warning">
                    <div className="card-header py-3 text-bg-warning border-warning">
                        <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body bg-dark">
                        <h1 className="card-title pricing-card-title text-light">R$29,90<small className="text-muted fw-light">/mês</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li className="text-light">Recados ilimitados.</li>
                        <li className="text-light">Suporte em calls, whatsapp e e-mail.</li>
                        <li className="text-light">Acesso ao HelpDesk.</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-warning">Entre em contato conosco.</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Pricing};