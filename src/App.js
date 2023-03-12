import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import About from './Components/About';
import Profile from './Components/Profile';
import Portfolio from './Components/Portfolio';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const App = () => {
  const navigate = useNavigate()
  const [state, setState] = useState(10)
  return (
    <div className='App'>
      <button onClick={() =>  navigate('about') }>About</button> &nbsp;&nbsp;
      <button onClick={() =>  navigate('profile') }>Profile</button> &nbsp;&nbsp;
      <button onClick={() =>  navigate('portfolio') }>Portfolio</button>

      <AppContext.Provider value={state}>

        <Routes>
          <Route path='about'>
            <About></About>
          </Route>

          <Route path='profile'>
            <Profile></Profile>
          </Route>

          <Route path='protfolio'>
            <Portfolio></Portfolio>
          </Route>
        </Routes>

      </AppContext.Provider>

    </div>
  )
}

export default App




