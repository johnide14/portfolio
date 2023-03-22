import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Services from './components/services/services'
import Footer from './components/footer/footer'
import Projects from './components/projects/projects'
import Contacts from './components/contact/contact'
import Tools from './components/tools/tools'
const App = () => {
  return (
   <>
   <Header />
   <Nav />
    <About />
    <Services />
    
    <Projects />
    <Tools />
    <Contacts />
    <Footer/>
   </>
  )
}

export default App