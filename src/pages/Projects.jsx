import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import SwiperComponent from '../components/SwiperComponent'

const Projects = () => {
    const ProjectsList = [{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Dynamic API",
        link: "https://github.com/syednoumanmateen/vismaya"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Employee Appraisal",
        link: "https://github.com/syednoumanmateen/tmb"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "tic-tac-toe",
        link: "https://github.com/syednoumanmateen/tic-tac-toe"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Movix",
        link: "https://github.com/syednoumanmateen/movix"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Odyssey",
        link: "https://github.com/syednoumanmateen/odyssey"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Tasteat",
        link: "https://github.com/syednoumanmateen/tasteat"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "TODO",
        link: "https://github.com/syednoumanmateen/todo-app"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Backend Practice",
        link: "https://github.com/syednoumanmateen/voosh"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "MERN Practice",
        link: "https://github.com/syednoumanmateen/fullMernPractice"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Admin Dashboard",
        link: "https://github.com/syednoumanmateen/admindashboard"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Meals",
        link: "https://github.com/syednoumanmateen/meals"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeENUrbft8FcJn3R8NB0qJH7aEjPnJzdFsjQ&s",
        title: "Haven",
        link: "https://github.com/syednoumanmateen/haven"
    }]

    return (
        <div className="container">
            <div className="">
                <Header title="Projects" />
            </div>
            <SwiperComponent className="row g-2 align-items-center p-0">
                {ProjectsList.map(ele => (
                    <SwiperSlide key={ele.title} className="col-lg-4 col-12 ">
                        <ProjectCard img={ele.img} title={ele.title} link={ele.link} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    )
}

export default Projects
