import React from 'react'

const ProjectCard = ({ img, title, link }) => {
    const isMobile = window.innerWidth < 768;

    return (
        <a href={link}>
            <div className="card  text-center">
                <img src={img} className="card-img-top" alt="..." />
                {isMobile&&<div className="card-body">
                    <h5 className="card-title fs-5 fw-bold">{title}</h5>
                </div>}
                <div className="card-details">
                    <h5 className="card-title">
                        {title}
                        <div className='fs-6 mt-1'>{link}</div>
                    </h5>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard
