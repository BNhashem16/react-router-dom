import { Fragment } from 'react'

function ContactComponent() {
  return (
    <Fragment>
      <div className="my-10 ">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">CONTACT SECTION</h1>
            </div>
          </div>
          <div className="row my-4 ">
            <div className="col-12">
              <form>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-8 my-4">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="user name" />
                  </div>
                  <div className="col-md-8 my-4">
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="user age" />
                  </div>
                  <div className="col-md-8 my-4">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="user email" />
                  </div>
                  <div className="col-md-8 my-4">
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="user password" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-8 my-4">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ContactComponent
