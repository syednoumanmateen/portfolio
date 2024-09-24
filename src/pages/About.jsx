import React from 'react'
import Header from '../components/Header'
import AboutCard from '../components/AboutCard'
import { GiAchievement, GiSandsOfTime } from 'react-icons/gi'
import Social from '../components/Social'

const About = () => {
    return (
        <div className="container">
            <div className="">
                <Header title="About" />
            </div>
            <div className="row g-3 align-items-center p-0">
                <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                    <img src="./src/assets/3.jpeg" alt="" className='aboutPro' />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="row g-3 p-0 fs-6 mb-4">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <AboutCard icon={<GiAchievement className='display-5 mx-2' />}>
                                <span className="fw-bold">Experience (2+)</span><br />
                                FrontEnd (React)(2+),<br />BackEnd (Node,Express) (2+).
                            </AboutCard>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <AboutCard icon={<GiSandsOfTime className='display-5 mx-2' />}>
                                <span className="fw-bold">Education</span><br />
                                Bachelor's Degree (BCA),<br />Master's Degree (MCA).
                            </AboutCard>
                        </div>
                    </div>
                    <div className="content fs-6">
                        <p className='text-indent'>
                            Hello world! I'm Syed Nouman Mateen, a Full-Stack Developer based out of Banglore.From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.
                        </p>
                        <p>
                            Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
                        </p>
                        <p>
                            I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Toronto in the contact form below or check me out at:
                        </p>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
