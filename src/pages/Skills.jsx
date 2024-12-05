import React, { memo, useState } from 'react'
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { FaAws, FaBootstrap, FaCode, FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJira, FaJs, FaNode, FaNpm, FaReact, FaSass, FaSlack } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa6'
import { GiCoffeeCup } from 'react-icons/gi'
import { SiExpress, SiMocha, SiMongoose, SiReactrouter, SiRedux } from 'react-icons/si'
import { TbCloudCog } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { scroller } from 'react-scroll'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import SkillCard from '../components/SkillCard'

const Skills = () => {
    const skillsList = [{
        icon: <FaHtml5 />,
        title: "HTML5"
    }, {
        icon: <FaCss3 />,
        title: "CSS3"
    }, {
        icon: <FaSass />,
        title: "SASS"
    }, {
        icon: <FaBootstrap />,
        title: "Bootstrap"
    }, {
        icon: <BiLogoTailwindCss />,
        title: "Tailwind"
    }, {
        icon: <FaJs />,
        title: "JavaScript(ES6+)"
    }, {
        icon: <FaCode />,
        title: "DSA"
    }, {
        icon: <BiLogoTypescript />,
        title: "TypeScript"
    }, {
        icon: <FaReact />,
        title: "React.js"
    }, {
        icon: <SiRedux />,
        title: "Redux"
    }, {
        icon: <SiReactrouter />,
        title: "React Router"
    }, {
        icon: <FaReact />,
        title: "React-Native"
    },{
        icon: <FaNode />,
        title: "Node.js"
    }, {
        icon: <SiExpress />,
        title: "Express.js"
    }, {
        icon: <BiLogoMongodb />,
        title: "Mongo DB"
    }, {
        icon: <SiMongoose />,
        title: "Mongoose"
    }, {
        icon: <TbCloudCog />,
        title: "REST APIS"
    }, {
        icon: <FaAws />,
        title: "AWS (EC2, S3, Lambda)"
    }, {
        icon: <FaGitAlt />,
        title: "Git"
    }, {
        icon: <FaGithub />,
        title: "GitHub"
    }, {
        icon: <FaGitlab />,
        title: "GitLab"
    }, {
        icon: <FaGitlab />,
        title: "GitLab CI"
    }, {
        icon: <SiMocha />,
        title: "Mocha"
    }, {
        icon: <GiCoffeeCup />,
        title: "Chai"
    },  {
        icon: <FaCode />,
        title: "Jest"
    }, {
        icon: <FaNpm />,
        title: "npm"
    }, {
        icon: <FaJira />,
        title: "Jira"
    }, {
        icon: <FaSlack />,
        title: "Slack"
    }, {
        icon: <VscVscode />,
        title: "Vscode"
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
