import React from 'react'

const SkillCard = ({ icon, title }) => {
    return (
        <div className="brd-rad text-center p-3 h-100">
            <div className="row p-0">
                <div className="col-12 mb-2 display-1">
                    {icon}
                </div>
                <div className="col-12 fs-6 overflow-hidden no-wrap">
                    {title.toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default SkillCard
