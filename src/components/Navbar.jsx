import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/main.css"

const Navbar = () => {
  const navRef = useRef(null)

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <div>
        <header>
            <h3>Jake Crowley</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My Work</a>
                <a href="/#">Blog</a>
                <a href="/#">About Me</a>
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
