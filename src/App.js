import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './Components/ReactRouter/MainRouter';
// import { useNavigate } from 'react-router-dom'

import React from 'react'

const App = () => {
  // const navigate =useNavigate()
  return (
    <div className='App'>
      {/* <button onClick={()=>navigate('/about')}>Click</button> */}
      {/* <h1>Welcome app</h1> */}
      <MainRouter/>
    </div>
  )
}

export default App




