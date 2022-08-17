import React from "react";
import "./EditButton.css";
import { ModalEditTask } from "../ModalEditTask/ModalEditTask";

const EditButton:any = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-secondary me-3" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@edit">
                <i className="bi bi-pen-fill"></i>
            </button>
            <ModalEditTask></ModalEditTask>
        </>
    )
}

export {EditButton};