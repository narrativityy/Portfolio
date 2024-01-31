import "../styles/main.css"
import headshot from '../assets/headshot.jpg'

const Home = () => {
  return (
    <div className="text-center mt-3">
        <div className="d-flex justify-content-center align-items-center">
            <div className="mx-2 ms-5 text-start">
                <h2 className="fs-1 fw-bold">Jake Crowley</h2>
                <p className="mt-2 fw-lighter">Jake is a full-stack engineer who solves complex problems. He attended Coding Dojo and has an Associate Degree in Computer Science</p>
            </div>
            <img className="me-5 shadow" id='headshot' src={headshot} height="50px" alt="Personal Portrait" />
        </div>
        <div className="mt-3 d-flex justify-content-center align-items-center">
            <div className="row align-items-start">
                <div className="col px-5">
                    <h3>About me</h3>
                </div>
                <div className="col px-5">
                    <h3>Skills</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home