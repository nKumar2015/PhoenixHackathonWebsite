/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter } from "react-router-dom"

import { Navbar, Slideshow, Contact, About, Sponsors, TeamMembers } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Slideshow />
        </div>
        <About />
        <TeamMembers />
        <Contact />
        <Sponsors />
      </div>
    </BrowserRouter>
  )
}

export default App
