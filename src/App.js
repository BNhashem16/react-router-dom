import logo from './logo.svg'
import './App.css'
import LayoutComponent from 'layouts/LayoutComponent'
import { Fragment } from 'react'
import AboutComponent from 'components/About/AboutComponent'
import ContactComponent from 'components/Contact/ContactComponent'
import PortfolioComponent from 'components/Portfolio/PortfolioComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as ReactDOM from 'react-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutComponent />,
      //   loader: rootLoader,
      children: [
        {
          path: 'about',
          element: <AboutComponent />,
          //   loader: teamLoader,
        },
        {
          path: 'portfolio',
          element: <PortfolioComponent />,
          //   loader: teamLoader,
        },
        {
          path: 'contact',
          element: <ContactComponent />,
          //   loader: teamLoader,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
