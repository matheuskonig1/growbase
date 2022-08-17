import React from "react";
import "./ModalDeleteTask.css";

const ModalDeleteTask:any = () => {
    return (
        <>
            <div className="modal fade" id="deleteModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-trash-fill me-3"></i>Deletar recado</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Você tem certeza que quer excluir este recado?
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-danger">Deletar recado</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export {ModalDeleteTask};