import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './pages/Banner'
import Navbar from './pages/Navbar'
import TechLogos from './pages/TechLogos'
import About from './pages/About'
import Tesmoinals from './pages/Tesmoinate'
import Test from './pages/Test'
import Design from './pages/Design'
import Development from './pages/Development'
import Digital from './pages/Digital'
import Component from './pages/Component'
import Mangement from './pages/Mangement'
import Footer from './pages/Footer'
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,//Animation duration
      once: true,//Whether animation should happen only once
      easing: 'ease-in-out',//Easing function
    })
  }

  )
  return (
    <div>
      <Banner />
      <Navbar />
      <TechLogos />
      <About />
      <Tesmoinals />
      <Test />
      <Design />
      <Development />
      <Digital />
      <Component />
      <Mangement />
      <Footer />
    </div>
  )
}

export default App