import './App.css'

import './App.css'
import Counter from './Counter'
import { useState } from 'react';


function App() {
 const [state,setState] =useState(false)
  return (
    <div className='App'>
     <h1 onClick={()=>setState(!state)} style={{cursor:'pointer'}}>Show/Hide</h1>
   {/* { state ? <Counter/> : null }  if else type method using ternary operator */}
   { state && <Counter/> } 
   {/* By using 'and'(&&) operator (and operator works only when both are true)  */}
     
    </div>
  );
}

export default App;

// Mounting
// Updating
// Unmounting

