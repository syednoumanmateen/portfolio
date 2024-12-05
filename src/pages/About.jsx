import React from 'react'
import Header from '../components/Header'
import AboutCard from '../components/AboutCard'
import { GiAchievement, GiSandsOfTime } from 'react-icons/gi'
import Social from '../components/Social'
import { memo } from 'react'

const About = () => {
    return (
        <div className="container">
            <div className="">
                <Header title="About" />
            </div>
            <div className="row g-3 align-items-center p-0">
                <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                    <img src="https://res.cloudinary.com/dz4lki63f/image/upload/v1731785593/4_xjo1oz.png" alt="" className='aboutPro' />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="row g-3 p-0 fs-6 mb-4">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <AboutCard icon={<GiAchievement className='display-5' />}>
                                <span className="fw-bold">Experience (3+)</span><br />
                            </AboutCard>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <AboutCard icon={<GiSandsOfTime className='display-5' />}>
                                <span className="fw-bold">Education</span><br />
                                Bachelor's Degree (BCA),<br />Master's Degree (MCA).
                            </AboutCard>
                        </div>
                    </div>
                    <div className="content fs-6">
                        <p className='text-indent'>Results-driven Web & Mobile Developer with over 3 years of experience building and deploying robust web applications. Proficient in Frontend technologies, with a strong focus on JavaScript(ES6+),React.js, Redux, and React-Native. Experienced in creating dynamic, user-centric interfaces using HTML5, CSS3, SASS, Bootstrap, and Tailwind CSS, while implementing REST APIs for seamless data integration and data storage and retrieval.</p>
                        <p>Adept in unit and integration testing using Jest, ensuring the delivery of reliable, bug-free applications. Strong experience in version control with Git, GitHub, and GitLab, and proficiency in the cloud, including AWS (EC2, S3, Lambda), Heroku, and GitLab CI for efficient deployment and continuous integration. Excellent communication and collaboration skills, with hands-on experience using Jira and Slack for project management in agile environments.</p>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(About)
