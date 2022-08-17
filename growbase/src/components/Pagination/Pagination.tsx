import React from "react";
import "./Pagination.css";

const Pagination:any = () => {
    return (
        <>
            <nav aria-label="Page navigation example bg-dark">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <a className="page-link bg-dark text-secondary">Previous</a>
                    </li>
                    <li className="page-item bg-dark text-secondary"><a className="page-link bg-dark text-secondary" href="#">1</a></li>
                    <li className="page-item bg-dark text-secondary"><a className="page-link bg-dark text-secondary" href="#">2</a></li>
                    <li className="page-item bg-dark text-secondary"><a className="page-link bg-dark text-secondary" href="#">3</a></li>
                    <li className="page-item bg-dark text-secondary">
                    <a className="page-link bg-dark text-secondary" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export {Pagination};