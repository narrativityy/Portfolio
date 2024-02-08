import React, { forwardRef } from "react";
import headshot from "../assets/headshot.jpg";

const MyStory = forwardRef((props, ref) => {
  return (
    <div className="d-flex justify-content-center align-items-center" ref={ref}>
      <div className="home text-center mx-4 py-3">
        <div className=" my-3 d-flex justify-content-center align-items-center">
          <div className="me-3 text-start">
            <h2 className="fs-1 fw-bold header">Jake Crowley</h2>
            <p className="mt-2 fw-lighter">
              I'm a full-stack developer with a passion for creating and
              learning. I'm always looking for new opportunities to grow and
              expand my skillset. I'm currently looking for a new role in web
              development. If you have any questions or would like to work with
              me, please feel free to reach out. I'm always open to new
              opportunities.
            </p>
          </div>
          <img
            className="shadow"
            id="headshot"
            src={headshot}
            height="50px"
            alt="Personal Portrait"
          />
        </div>
        <h1 className="mt-4 fs-2 fw-bold text-start header">My Story</h1>
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <div className="text-start fw-lighter">
            For as long as I can remember, my life has revolved around computers.
            From getting home from school and watching YouTube to figuring out every
            setting I could change on my iPod, I have been fascinated with tinkering
            with all kinds of technology. My passion had grown to the point where I
            wanted to build my own computer, and I did just that. I spent hours
            researching and learning about the different components and how they
            worked together. I was so proud of myself when I finally got it to boot
            up for the first time. I was hooked. I knew that I wanted to work with
            computers for the rest of my life. I slowly started learning about
            coding and Software Engineering and it igninted a brand new fire in me.
            When I began attending college, I took my first Computer Science class
            and I couldn't stop thinking about how every piece of technology
            logically works. By the time I graduated high school, I was a few
            classes short of an Associate's Degree in Computer Science. I was so
            excited to continue my education and learn more about the field.
            However, during this time I started researching Coding Bootcamps and I
            was intrigued. I decided to take a leap of faith and enroll in a
            Full-Stack Web Development Bootcamp at Coding Dojo. I was so excited to
            learn about the latest technologies and how to build full-stack
            applications. During the bootcamp, I enjoyed the team environment. I was
            not only able to work with other students and learn from them but also
            able to help others and learn from teaching them. This circular learning
            environment allowed me to grow and learn at an accelerated pace. By the
            end of the bootcamp, I had built multiple full-stack applications and
            graduated at the top of my class, earning a Triple Black Belt.
        </div>
        </div>
      </div>
    </div>
  );
});

export default MyStory;
