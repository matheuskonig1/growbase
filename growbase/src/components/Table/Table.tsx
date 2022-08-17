import React from "react";
import "./Table.css";
import { Pagination } from "../Pagination/Pagination";

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
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">$id</th>
                        <td>$descrição</td>
                        <td>$detalhamento</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary me-3">
                                <i className="bi bi-pen-fill"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
                <Pagination></Pagination>
                <button type="button" className="btn btn-outline-warning btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar recado</button>       
            </div>
        </>
    )
}

export {Table};