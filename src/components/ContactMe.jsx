import React, { forwardRef, useRef } from 'react'

const ContactMe = forwardRef((props, ref) => {
  return (
    <div className="d-flex justify-content-center align-items-center" ref={ref}>
        <div className="home text-start mx-4 py-3">
            <h1 className="fs-2 fw-bold text-start">Contact Me</h1>
        </div>
    </div>
  )
})

export default ContactMe