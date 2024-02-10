import React, { useRef, forwardRef } from "react";
import MovieFinder from "../assets/MovieFinder.png";
import WorkoutWithMe from "../assets/WorkoutWithMe.png";
import EchoEra from "../assets/EchoEra.png";
import TrialAndError from "../assets/TrialAndError.png";

const MyWork = forwardRef((props, ref) => {
  const MovieFinderRef = useRef(null);
  const WorkoutWithMeRef = useRef(null);
  const EchoEraRef = useRef(null);
  const TrialAndErrorRef = useRef(null);

  const toggleDescription = (ref) => {
    ref.current.classList.toggle("hidden");
  };

  return (
    <div className="margin home text-start" ref={ref}>
      <h1 className="my-2 fs-2 fw-bold header">My Work</h1>
      <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
        <div
          onMouseEnter={() => toggleDescription(MovieFinderRef)}
          onMouseLeave={() => toggleDescription(MovieFinderRef)}
          className="projectContainer"
        >
          <img
            className="projectImage"
            src={MovieFinder}
            alt="Movie Finder Web Page"
          />
          <div ref={MovieFinderRef} className="projectDescription hidden">
            <h3 className="projectTitle">MovieFinder</h3>
            <h3 className="projectSubtitle">
              A personal project that uses RESTFUL APIs to take user input and
              display an information set from JSON format and was designed with
              Bootstrap. Built with HTML, CSS, JavaScript.
            </h3>
          </div>
        </div>
        <div
          onMouseEnter={() => toggleDescription(WorkoutWithMeRef)}
          onMouseLeave={() => toggleDescription(WorkoutWithMeRef)}
          className="projectContainer"
        >
          <img
            className="projectImage"
            src={WorkoutWithMe}
            alt="Workout With Me Web Page"
          />
          <div ref={WorkoutWithMeRef} className="projectDescription hidden">
            <h3 className="projectTitle">Workout With Me</h3>
            <h3 className="projectSubtitle">
              Full-stack web application built with Python, Flask, and MySQL
              which allows visitors to login or register, log workouts and
              exercises, and share them with other users.
            </h3>
          </div>
        </div>
        <div
          onMouseEnter={() => toggleDescription(EchoEraRef)}
          onMouseLeave={() => toggleDescription(EchoEraRef)}
          className="projectContainer"
        >
          <img className="projectImage" src={EchoEra} alt="Echo Era Web Page" />
          <div ref={EchoEraRef} className="projectDescription hidden">
            <h3 className="projectTitle">EchoEra</h3>
            <h3 className="projectSubtitle">
              Full-stack web application built with JavaScript, React, Node.js,
              and MongoDB. Users have the abiltiy to create a playlist. Once
              created each song will automatically attach a YouTube link and
              embed video so users can listen to the song directly from the
              website.
            </h3>
          </div>
        </div>
        <div
          onMouseEnter={() => toggleDescription(TrialAndErrorRef)}
          onMouseLeave={() => toggleDescription(TrialAndErrorRef)}
          className="projectContainer"
        >
          <img
            className="projectImage"
            src={TrialAndError}
            alt="Trial and Error Screenshot"
          />
          <div ref={TrialAndErrorRef} className="projectDescription hidden">
            <h3 className="projectTitle">Trial and Error</h3>
            <h3 className="projectSubtitle">
              A Unity based 2d platformer with power-ups, obstacles, and a timer
              which provides the player with numerous ways to complete the
              level. The objective is to get to the finish line as fast as you
              can and beat you or someone else’s high score.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MyWork;
