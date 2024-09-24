import React, { useState } from 'react'
import Header from '../components/Header'
import SkillCard from '../components/SkillCard'
import Pagination from '../components/Pagination'
import { FaAws, FaBootstrap, FaCode, FaCss3, FaHtml5, FaNode, FaNpm, FaReact, FaUniversalAccess } from 'react-icons/fa'
import { MdDevicesOther } from 'react-icons/md'
import { BsTerminalFill } from 'react-icons/bs'
import { TbCloudCog } from 'react-icons/tb'
import { BiLogoMongodb } from 'react-icons/bi'
import { SiExpress, SiRedux, SiTypescript } from 'react-icons/si'
import { DiJqueryLogo } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { scroller } from 'react-scroll'
import { memo } from 'react'

const Skills = () => {
    const skillsList = [{
        icon: <FaHtml5 />,
        title: "HTML"
    }, {
        icon: <FaCss3 />,
        title: "CSS"
    }, {
        icon: <IoLogoJavascript />,
        title: "JavaScript(ES6+)"
    }, {
        icon: <FaCode />,
        title: "DataStructure"
    }, {
        icon: <SiTypescript />,
        title: "TypeScript"
    }, {
        icon: <FaReact />,
        title: "React"
    }, {
        icon: <SiRedux />,
        title: "Redux"
    }, {
        icon: <FaNode />,
        title: "Node"
    }, {
        icon: <SiExpress />,
        title: "Express"
    }, {
        icon: <BiLogoMongodb />,
        title: "Mongo DB"
    }, {
        icon: <DiJqueryLogo />,
        title: "jQuery"
    }, {
        icon: <TbCloudCog />,
        title: "REST APIS"
    }, {
        icon: <BsTerminalFill />,
        title: "Git"
    }, {
        icon: <BsTerminalFill />,
        title: "Terminal"
    }, {
        icon: <MdDevicesOther />,
        title: "ResponsiveDesign"
    }, {
        icon: <FaUniversalAccess />,
        title: "Accessibility"
    }, {
        icon: <FaNpm />,
        title: "npm"
    }, {
        icon: <FaAws />,
        title: "aws"
    }, {
        icon: <FaBootstrap />,
        title: "Bootstrap"
    }
    ]

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = skillsList.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageSet) => {
        scroller.scrollTo("skill", {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
        setCurrentPage(pageSet)
    }

    return (
        <div className="container">
            <div className="">
                <Header title="Skills" />
            </div>
            <div className="row g-2 align-items-center p-0">
                {currentItems.map(ele => (
                    <div key={ele.title} className="col-lg-3 col-6 ">
                        <SkillCard icon={ele.icon} title={ele.title} />
                    </div>
                ))}
            </div>
            <Pagination itemsPerPage={itemsPerPage} totalItems={skillsList} paginate={paginate} />
        </div>
    )
}

export default memo(Skills)
