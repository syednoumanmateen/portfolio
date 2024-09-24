import React, { memo } from 'react'
import { useTheme } from '../context/Theme'

const AboutCard = ({ children, icon }) => {
    const { theme } = useTheme()

    return (
        <>
            <div className={`border border-1 rounded ${theme==="dark"?"border-light":"border-dark"} text-center p-3`}>
                <div className="row">
                    <div className="col-12 mb-2">
                        {icon}
                    </div>
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(AboutCard)
