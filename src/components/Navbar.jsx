import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/main.css"
import logo from "../assets/logo.jpg"

const Navbar = (props) => {

  const navRef = useRef(null)

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <div id='navbar-container' className='mt-2 mb-0'>
        <header className=''>
            <img className='shadow rounded' id='logo' src={logo} alt="website logo" />
            <nav ref={navRef}>
                <h2 onClick={() => props.props.aboutScrollDown()} href="/#">About Me</h2>
                <h2 onClick={() => props.props.workScrollDown()}>My Work</h2>
                <h2 onClick={() => props.props.contactScrollDown()}>Contact Me</h2>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    </div>
  )
}

export default Navbar
