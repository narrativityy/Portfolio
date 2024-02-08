import React, { forwardRef } from "react";

const MyLinks = forwardRef((props, ref) => {
  return (
    <div id="myLinks" className="margin home text-start mt-3" ref={ref}>
      <h1 className="mt-2 fs-2 fw-bold header">My Links</h1>
      <div className="my-4 fw-lighter d-flex justify-content-between align-items-center">
        <a href="https://www.linkedin.com/in/jake-crowley-27868b243/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/narrativityy" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:jake@jakemcrowley.com" target="_blank" rel="noreferrer">Email</a>
        <a href="" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  );
});

export default MyLinks;
