import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import '../styles/main.css';

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 85) {
          setShowTopBtn(true)
        } else {
          setShowTopBtn(false)
        }
      })
    }, [])
  
    const goToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  return (
    <div className='top-to-btm'>
        {showTopBtn && (
            <FaAngleUp onClick={goToTop} className='icon-position icon-style shadow' />
        )}
    </div>
  )
}

export default ScrollToTop