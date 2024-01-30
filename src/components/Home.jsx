import "../styles/main.css"
import headshot from '../assets/headshot.jpg'

const Home = () => {
  return (
    <div className="mt-4">
        <div className="d-flex justify-content-center align-items-center">
            <img id='headshot' src={headshot} alt="Personal Portrait" />
        </div>
        <div className="mt-3 d-flex justify-content-center align-items-center">
            <div className="row align-items-start">
                <div className="col">
                    <h3>Hello, my name is Jake</h3>
                </div>
                <div className="col">
                    <h3>Skills</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home