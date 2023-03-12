import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



import React from 'react'
import About from './Components/About';
import Profile from './Components/Profile';
import Portfolio from './Components/Portfolio';
import { useState } from 'react';

const App = () => {
 const [state,setState] =useState('')
 let component
 if (state==='about'){
  component= <About></About>
 }
 if (state==='profile'){
  component= <Profile></Profile>
 }
 if (state==='portfolio'){
  component= <Portfolio></Portfolio>
 }
  return (
    <div className='App'>
    <button onClick={()=>{setState('about')}}>About</button> &nbsp;&nbsp;
    <button onClick={()=>{setState('profile')}}>Profile</button> &nbsp;&nbsp;
    <button onClick={()=>{setState('portfolio')}}>Portfolio</button>
    {component}
    
     
     
    </div>
  )
}

export default App




