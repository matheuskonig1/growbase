import React from "react";
import "./DeleteButton.css";

const DeleteButton:any = () => {
    return (
        <>
             <button type="button" className="btn btn-outline-danger">
                <i className="bi bi-trash-fill"></i>
            </button>
        </>
    )
}

export {DeleteButton};