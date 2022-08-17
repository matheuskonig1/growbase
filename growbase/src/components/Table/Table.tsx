import React from "react";
import "./Table.css";
import { Pagination } from "../Pagination/Pagination";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { AddButton } from "../AddButton/AddButton";

const Table:any = () => {
    return (
        <>
            <div className="col-lg p-3 offset-lg-2 min-vh-100">
                <h2 className="text-white display-6">Lista de Recados</h2>
                <table className="table table-dark table-hover rounded mt-4">
                <thead>
                    <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Detalhamento</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <EditButton />
                            <DeleteButton />
                        </td>
                    </tr>
                </tbody>
                </table>
                <Pagination />   
                <AddButton />       
            </div>
        </>
    )
}

export {Table};