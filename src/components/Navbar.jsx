import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/main.css"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const navRef = useRef(null)

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <div id='navbar-container' className='m-2 mb-0 shadow rounded'>
        <header>
            <img id='logo' src={logo} alt="website logo" />
            <nav ref={navRef}>
                <Link to={"/"}>Home</Link>
                <Link to={"/work"}>My Work</Link>
                <Link to={"/about"} href="/#">About Me</Link>
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
