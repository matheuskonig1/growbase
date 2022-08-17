import React from "react";
import "./ModalAddTask.css";

const ModalAddTask:any = () => {
    return (
        <>
             <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title text-white" id="exampleModalLabel">Adicionar recado</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="description-name" className="col-form-label text-white">Descrição:</label>
                            <input type="text" className="form-control bg-dark text-white" id="description-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="details-text" className="col-form-label text-white">Detalhamento:</label>
                            <textarea className="form-control bg-dark text-white" id="details-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-warning">Adicionar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {ModalAddTask};