import { Fragment } from 'react'
import HeaderComponent from 'layouts/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from 'layouts/FooterComponent'
function LayoutComponent() {
  return (
    <Fragment>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Fragment>
  )
}

export default LayoutComponent
