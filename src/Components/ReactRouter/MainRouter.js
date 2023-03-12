import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { Routes,Route,Link } from 'react-router-dom'
import NotFound from './pages/NotFound'
import nav from './pages/nav.css'


const MainRouter = () => {
  return (
    <div>

         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="contact">Contact</Link></li>
         </ul>

      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='services' element={<Services />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default MainRouter
