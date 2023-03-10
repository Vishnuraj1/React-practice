import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';



function App() {
  const [state, setState] = useState([])
  return (
    <div className='App'>
      <h1>hello</h1>
      < button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
          console.log(response.data)
          setState(response.data)
        })

      }} >Click me</button>

     {state.map((obj,index)=>{
      return(
        <div>
          <h1>{index+1}</h1>
          <h1>{obj.title}</h1>
          <h4>{obj.body}</h4>
        </div>
      )
     })}
      
    </div >

  );
}

export default App;

