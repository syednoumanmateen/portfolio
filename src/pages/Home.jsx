import { memo, useState } from 'react';
import { Link } from 'react-scroll';
import Social from '../components/Social';
import { FaMobile } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { useTheme } from '../context/Theme';

const Home = () => {
    const [role, setRole] = useState("Web")
    const { theme } = useTheme()

    setInterval(() => {
        setRole(prev => prev === "Web" ? "Software" : "Web")
    }, 5000)

    const handleDownload = () => {
        const docxFileUrl = './src/assets/SyedResume.docx';

        const a = document.createElement('a');
        a.href = docxFileUrl;
        a.download = 'syedCV.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <>
            <div className="container">
                <div className="row g-3 text-center align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <img src="./src/assets/1.jpeg" alt="" className='profile' />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className='fs-4'>
                            Hi i am
                        </div>
                        <div className="display-4 fw-bold">
                            Syed Nouman Mateen
                        </div>
                        <div className="fs-4 mb-4">
                            Full-Stack  <span className='fw-bold'>{role}</span> Developer
                        </div>
                        <div className="container mb-3 fs-6">
                            <div className="row g-1">
                                <div className="col-12">
                                <FaMobile /> 9738455695
                                </div>
                                <div className="col-12">
                                <IoIosMail /> syednoumanmateen1997@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="container mb-3">
                            <button onClick={() => handleDownload()} className={`btn ${theme==="dark"?"btn-outline-light":"btn-outline-dark"}  rounded-pill  me-3`}>
                                Download CV
                            </button>

                            <Link  className={`btn ${theme==="dark"?"text-dark btn-light":"text-light btn-dark"} rounded-pill`} to="contact" smooth={true} duration={500}>Contact</Link>
                        </div>
                        <Social />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Home)