import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import SwiperComponent from '../components/SwiperComponent'
import { memo } from 'react'

const Projects = () => {
    const ProjectsList = [{
        img: "./src/assets/dynamic api.png",
        title: "Dynamic API",
        link: "https://github.com/syednoumanmateen/vismaya"
    }, {
        img: "./src/assets/kudos.png",
        title: "Employee Appraisal",
        link: "https://github.com/syednoumanmateen/tmb"
    }, {
        img: "./src/assets/tic-tac-toe.png",
        title: "tic-tac-toe",
        link: "https://github.com/syednoumanmateen/tic-tac-toe"
    }, {
        img: "./src/assets/movix.png",
        title: "Movix",
        link: "https://github.com/syednoumanmateen/movix"
    }, {
        img: "./src/assets/odyssey.png",
        title: "Odyssey",
        link: "https://github.com/syednoumanmateen/odyssey"
    }, {
        img: "./src/assets/tasteeat.png",
        title: "Tasteat",
        link: "https://github.com/syednoumanmateen/tasteat"
    }, {
        img: "./src/assets/blog.png",
        title: "TODO",
        link: "https://github.com/syednoumanmateen/todo-app"
    }, {

        title: "Backend Practice",
        link: "https://github.com/syednoumanmateen/voosh"
    }, {

        title: "MERN Practice",
        link: "https://github.com/syednoumanmateen/fullMernPractice"
    }, {
        img: "./src/assets/admin-dashboard.png",
        title: "Admin Dashboard",
        link: "https://github.com/syednoumanmateen/admindashboard"
    }, {
        img: "./src/assets/expens1.png",
        title: "Meals",
        link: "https://github.com/syednoumanmateen/meals"
    }, {
        img: "./src/assets/haven.png",
        title: "Haven",
        link: "https://github.com/syednoumanmateen/haven"
    }, {
        img: "./src/assets/portfolio.png",
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
