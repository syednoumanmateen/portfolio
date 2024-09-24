import React, { memo, useCallback, useEffect, useState } from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers=Array(Math.ceil(totalItems.length / itemsPerPage)).fill().map((_,i)=>i+1)

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default memo(Pagination)
