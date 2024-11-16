import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import SwiperComponent from '../components/SwiperComponent'
import { memo } from 'react'

const Projects = () => {
    const ProjectsList = [ {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785590/tic-tac-toe_tpq4jq.png",
        title: "tic-tac-toe",
        link: "https://github.com/syednoumanmateen/tic-tac-toe"
    }, {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785592/movix_gb2xi7.png",
        title: "Movix",
        link: "https://github.com/syednoumanmateen/movix"
    }, {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785592/odyssey_uok6pj.png",
        title: "Odyssey",
        link: "https://github.com/syednoumanmateen/odyssey"
    }, {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785591/tasteeat_vcicol.png",
        title: "Tasteat",
        link: "https://github.com/syednoumanmateen/tasteat"
    }, {
        img: "",
        title: "TODO",
        link: ""
    }, {
        img: "",
        title: "Notes",
        link: ""
    },{
        img: "",
        title: "Blog",
        link: ""
    },{
        img: "",
        title: "Weather",
        link: ""
    }, {

        title: "MERN Practice",
        link: "https://github.com/syednoumanmateen/fullMernPractice"
    }, {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785593/admin-dashboard_cfkzxo.png",
        title: "Admin Dashboard",
        link: "https://github.com/syednoumanmateen/admindashboard"
    }, {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785592/haven_hedpgf.png",
        title: "Haven",
        link: "https://github.com/syednoumanmateen/haven"
    }, {
        img: "https://res.cloudinary.com/dz4lki63f/image/upload/v1731785591/portfolio_k6hfg3.png",
        title: "Portfolio",
        link: "https://github.com/syednoumanmateen/portfolio"
    }]

    const isMobile = window.innerWidth < 768

    return (
        <div className="container">
            <div className="">
                <Header title="Projects" />
            </div>
            <SwiperComponent className="row g-2 align-items-center p-0" slidesPerView={isMobile ? 1 : 3}>
                {ProjectsList.map(ele => (
                    <SwiperSlide key={ele.title} className="col-lg-4 col-12 ">
                        <ProjectCard img={ele.img} title={ele.title} link={ele.link} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    )
}

export default memo(Projects)
