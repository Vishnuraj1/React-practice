import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import Search from './Components/Search';


const App = () => {
 
  return (
    <div className='App'>
     <h1>Welcome Home</h1>
     <Search/>
      <Cards/>

    </div>
  )
}

export default App




