import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function HeaderComponent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 5) {
      console.log('🚀 ~ file: HeaderComponent.jsx:16 ~ handleScroll ~ window.scrollY:', window.scrollY)
      // You can adjust this value based on when you want the navbar to resize
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-resize' : ''}`}>
        <div className="container my-3">
          <Link to="/" className="navbar-brand text-light fs-2 fw-bold">
            START FRAMEWORK
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="about" className="nav-link text-light fs-6 fw-bold px-3">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="portfolio" className="nav-link text-light fs-6 fw-bold px-3">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link text-light fs-6 fw-bold">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default HeaderComponent
