import React from "react";
import "./AddButton.css";

const AddButton:any = () => {
    return (
        <>
             <button type="button" className="btn btn-outline-warning btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar recado</button>
        </>
    )
}

export {AddButton};