import React from 'react'
import { memo } from 'react'
import { FaGithub, FaLinkedin, FaMobile, FaTwitter } from 'react-icons/fa'

const Social = ({className}) => {
    return (
        <div className={`${className} container text-center fs-2 d-flex justify-content-evenly`}>
            <a href="https://github.com/syednoumanmateen" ><FaGithub /></a>

            <a href="https://www.linkedin.com/in/syed-nouman-mateen" ><FaLinkedin /></a>

            <a href="https://x.com/syednoumanA1"><FaTwitter /></a>
        </div>
    )
}

export default memo(Social)
