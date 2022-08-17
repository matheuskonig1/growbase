import React from "react";
import "./ModalEditTask.css";

const ModalEditTask:any = () => {
    return (
        <>
             <div className="modal fade" id="editModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title text-white" id="exampleModalLabel"><i className="bi bi-pen-fill me-3"></i>Editar recado</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="description-name" className="col-form-label text-white">Descrição:</label>
                            <input type="text" className="form-control bg-dark text-white" id="description-name" value="$descricao_da_tarefa"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="details-text" className="col-form-label text-white">Detalhamento:</label>
                            <textarea className="form-control bg-dark text-white" id="details-text">$detalhamento_da_tarefa</textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-warning">Editar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {ModalEditTask};