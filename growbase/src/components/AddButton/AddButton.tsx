import React from "react";
import "./AddButton.css";
import { ModalAddTask } from "../ModalAddTask/ModalAddTask";

const AddButton:any = () => {
    return (
        <>
             <button type="button" className="btn btn-outline-warning btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className="bi bi-folder-plus me-3"></i>Adicionar</button>
             <ModalAddTask></ModalAddTask>
        </>
    )
}

export {AddButton};