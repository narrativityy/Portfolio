import React, { forwardRef } from 'react'

const ContactMe = forwardRef((props, ref) => {
  return (
    <div className="d-flex justify-content-center align-items-center" ref={ref}>
        <div className="home text-center mx-4 py-3">
            <h1 className="fs-2 fw-bold text-start header">Contact Me</h1>
            <div className="my-4 d-flex justify-content-center align-items-center">
                <div className="row align-items-start">
                    <div className="col me-1">
                        <label htmlFor="message">Send me a message!</label>
                    </div>
                    <div className="col ms-1">
                        <input type="text" placeholder='Enter your email!' />
                        <input type="text" placeholder='Enter your message!' />
                        <br />
                        <button type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default ContactMe