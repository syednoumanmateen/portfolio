import React from 'react'
import Header from '../components/Header'
import Social from '../components/Social'
import { memo } from 'react'
import { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: "Syed Nouman Mateen",
        email: "syednoumanmateen1997@gmail.com",
        subject: null,
        message: null
    })

    const onHandleChange = (e) => {
        const payload = { ...data }
        payload[e.target.name] = e.target.value
        console.log(payload)
        setData(payload)
        console.log(data)
    }

    const handleEmailClick = (e) => {
        e.preventDefault()
        const body=`<div>${data.message}</div>`
        const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="contact">
            <div className="mx-lg-2 mx-md-5 mx-sm-5">
                <div className="mb-4 text-light mt-5">
                    <Header title="Contact" />
                </div>
                <div className='row g-0 p-0 align-items-center'>
                    <div className="col-lg-5 col-md-12 col-sm-12 p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d416646.3170827731!2d77.03637477315196!3d12.70824949893549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQzJzEzLjMiTiA3N8KwMTYnMjEuOSJF!5e0!3m2!1sen!2sin!4v1727125640796!5m2!1sen!2sin" className='map' loading="lazy"></iframe>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 p-2">
                        <form className='text-light fs-5 mb-3'>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="name" value={data.name} disabled className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" value={data.email} disabled className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" name="subject" value={data?.subject} placeholder="Subject" className="form-control" onChange={(e) => onHandleChange(e)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" name="message" value={data?.message} placeholder="Message" rows="5" onChange={(e) => onHandleChange(e)} />
                            </div>

                            <div className="d-grid gap-2 col-6 mx-auto mt-3">
                                <button className="btn btn-outline-light" type="button" onClick={handleEmailClick}>Contact</button>
                            </div>
                        </form>
                        <Social className="cnt" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Contact)
