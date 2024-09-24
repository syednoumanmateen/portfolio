import React, { memo } from 'react'

const AboutCard = ({ children, icon }) => {
    return (
        <>
            <div className="brd-rad text-center p-3">
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
