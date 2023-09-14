import { Fragment, useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'

function PortfolioComponent() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = ['assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/1.png', 'assets/2.png', 'assets/3.png']

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <Fragment>
      <div className="my-10 ">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">PORTFOLIO COMPONENT</h1>
            </div>
          </div>
          <div className="row my-4 ">
            {images.map((src, index) => (
              <div className="col col-md-4 col-sm-6 col-xs-12 p-4 image-container" onClick={() => openImageViewer(index)} key={index}>
                <div className="position-relative" key={index}>
                  <div className="img-overlay" key={index}>
                    <i className="fas fa-plus"></i>
                  </div>
                  <img src={src} width="410" className="images" key={index} alt="" />
                </div>
              </div>
            ))}

            {isViewerOpen && <ImageViewer src={images} currentIndex={currentImage} disableScroll={false} closeOnClickOutside={true} onClose={closeImageViewer} />}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PortfolioComponent
