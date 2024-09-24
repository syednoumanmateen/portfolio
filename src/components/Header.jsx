import React from 'react'

const Header = ({ title }) => {
    return (
        <>
            <div className="text-center fs-2 fw-bold mb-5">
                <span className='border-bottom border-2 border-dark'>{title}</span>
            </div>
        </>
    )
}

export default Header
