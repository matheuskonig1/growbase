import React from "react";
import "./Cards.css";

const Cards:any = () => {
    return (
        <>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 text-light display-4">Por que usar o <span className="yellow">Grow</span>?</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                            <img className="img-fluid" src="https://shiny-buttercream-377ac5.netlify.app/work.png" height="400"/>
                            <h2 className="text-white display-5">Organize o job.</h2>
                            <p className="text-white lead">Com o Growbase você cria recados para organizar sua vida profissional.</p>
                        </div>
                        <div className="feature col">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        </div>
                        <img className="img-fluid" src="https://shiny-buttercream-377ac5.netlify.app/life.png" height="400"/>
                        <h2 className="text-white display-5">Organize a vida.</h2>
                        <p className="text-white lead">Não somos o Itaú, mas o Grow também é feito para você.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                        <img className="img-fluid" src="https://shiny-buttercream-377ac5.netlify.app/notes.png" height="400"/>
                        <h2 className="text-white display-5 justify-content-end aligh-items-end">Deixe um recado.</h2>
                        <p className="text-white lead">Pare de esquecer suas próximas ações, dá um Grow!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Cards};