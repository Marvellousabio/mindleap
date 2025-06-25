import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import './App.css'
import WorkingStep from './Components/WorkingStep'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services/>
      <About />
      <WorkingStep/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App