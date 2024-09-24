import React from 'react'
import { useTheme } from '../context/Theme'
import { memo } from 'react'

const Header = ({ title }) => {
    const { theme } = useTheme()

    return (
        <>
            <div className="text-center fs-2 fw-bold mb-5">
                <span className={`border-bottom border-2 4{theme==="dark"?"border-light":"border-dark"}`}>{title}</span>
            </div>
        </>
    )
}

export default memo(Header)
