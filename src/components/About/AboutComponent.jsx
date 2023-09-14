import { Fragment } from 'react'

function AboutComponent() {
  return (
    <Fragment>
      <div className="clear"></div>
      <div className="about-background h-80">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-4">
              <h1>ABOUT COMPONENT</h1>
              <div className="d-flex px-3">
                <div className="col-md-6">
                  <p className="card-text text-start text-light">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

                <div className="col-md-6">
                  <p className="card-text text-start text-light">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutComponent
