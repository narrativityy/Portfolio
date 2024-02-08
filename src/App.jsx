import { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./output.css";
import Navbar from "./components/Navbar";
import MyStory from "./components/MyStory";
import MyWork from "./components/MyWork";
import MyLinks from "./components/MyLinks";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const aboutScrollDown = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const workScrollDown = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const contactScrollDown = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="body" className="text-slate-100">
      <Navbar props={{ aboutScrollDown, workScrollDown, contactScrollDown }} />
      <ScrollToTop />
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
        <MyStory ref={aboutRef} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
        <MyWork ref={workRef} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
        <MyLinks ref={contactRef} />
      </ScrollAnimation>
    </div>
  );
}

export default App;
