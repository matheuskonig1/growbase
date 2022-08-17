import React from "react";
import "./DeleteButton.css";
import { ModalDeleteTask } from "../ModalDeleteTask/ModalDeleteTask";

const DeleteButton:any = () => {
    return (
        <>
             <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@delete">
                <i className="bi bi-trash-fill"></i>
            </button>
            <ModalDeleteTask/>
        </>
    )
}

export {DeleteButton};