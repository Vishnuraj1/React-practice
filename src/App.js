import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebase from './Firebase/Config'
import SignUp from './Components/SignUp';

const App = () => {
 
  return (
    <div className='App'>
     <h1>Welcome Home</h1>
  <SignUp/>

    </div>
  )
}

export default App




