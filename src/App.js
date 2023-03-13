import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebase from './Firebase/Config'

const App = () => {
 
  return (
    <div className='App'>
     <h1>Welcome Home</h1>
     <button onClick={()=>{
           Firebase.firestore().collection('products').get().then((snapshot)=>{
                  snapshot.forEach((obj)=>{
                    console.log(obj.data())
                  })
           })
     }}>Click me</button>

    </div>
  )
}

export default App




