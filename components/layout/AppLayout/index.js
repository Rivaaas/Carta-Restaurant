import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from "react-dom/client";
import Navbar from '../Navbar'

function AppLayout({ children }) {

  return (

    <div className='bg-gray-50'>
      <div className="
      container-app
      grid grid-cols-1
      place-content-center
      place-items-center
      z-0
      bg-secondary-bg
    ">
        <main className="
        overflow-hidden
        w-full
        h-screen
        bg-primary-bg
        bg-[url('/public/bg-opthree.svg')]
        bg-contain
        bg-no-repeat
        bg-bottom
        md:max-w-lg
        md:w-5/6
        md:rounded-xl
        md:shadow-sm
        md:shadow-gray-800
        md:my-4
        ">
            <Navbar />
          {children}
          <div className='absolute inset-x-0 bottom-0 h-16'>
          </div>
        </main>
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default AppLayout