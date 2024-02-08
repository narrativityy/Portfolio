import React, { forwardRef } from "react";

const MyWork = forwardRef((props, ref) => {
  return (
    <div className="margin home text-start" ref={ref}>
      <h1 className="mt-2 fs-2 fw-bold header">My Work</h1>
      <div className="my-4 fw-lighter">
        <p>
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
        </p>
      </div>
    </div>
  );
});

export default MyWork;
