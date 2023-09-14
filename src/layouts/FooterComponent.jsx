import { Fragment } from 'react'
import HeaderComponent from 'layouts/HeaderComponent'
import { Outlet } from 'react-router-dom'

function FooterComponent() {
  return (
    <div className="parent-footer-background">
      <footer className=''>
        <div className="container">
          <div className="row">
            <div className="my-5 d-flex ">
              <div className="col-4 text-center">
                <h5 className="text-light">LOCATION</h5>
                <p className="text-light">
                  2215 John Daniel Drive <br></br> Clark, MO 65243
                </p>
              </div>
              <div className="col-4 text-center">
                <h5 className="text-light">AROUND THE WEB</h5>
                <div className="d-flex justify-content-center">
                  <a href="#" className="mx-2 social-media-border">
                    <i className="fab fa-facebook-f text-light"></i>
                  </a>
                  <a href="#" className="mx-2 social-media-border">
                    <i className="fab fa-twitter text-light"></i>
                  </a>
                  <a href="#" className="mx-2 social-media-border">
                    <i className="fab fa-linkedin-in text-light"></i>
                  </a>
                  <a href="#" className="mx-2 social-media-border">
                    <i className="fab fa-dribbble text-light"></i>
                  </a>
                </div>
              </div>
              <div className="col-4 text-center">
                <h5 className="text-light">ABOUT FREELANCER</h5>
                <p className="text-light">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
    
          </footer>
              <div className="child-footer-background">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-light">© 2021 Start Bootstrap. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FooterComponent
