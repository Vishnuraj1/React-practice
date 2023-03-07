import './App.css'
// import { useState } from 'react';
import Employee from './Employee';
// import Counter from './Counter';
function App() {

//   const [Count,setCount] = useState(0)
 
//  const addCount =()=>{
//       setCount(Count+1)
     
//  }

//  obj object is created for learing spread and rest operators 

//  let obj ={
//   title:'1st counter',
//   Count:Count,
//   place:'myanmar'
//  }

// emp object is created to learn map method

let emp =[
  {name:'Yesudas',age:83},
  {name:'Haricharan',age:26},
  {name:'Chitra',age:59},
]

  return (

    // <div className='App'>
    //   <button onClick={addCount}>Add</button>
    //    <Counter {...obj}/>
    //    <Counter title='2nd Counter'  Count ={Count}/>
      
    // </div>

    //  spread operator using to pass values 

 

    // map method 

    <div className='App'>
     
      {
        emp.map((obj,index)=>{
           return(
            // <Employee key={index} name={obj.name} age={obj.age}/> Normal way
            <Employee key={index} {...obj}/> //using spread opearator 
           )
        })
      }
      
    </div>
  );
}

export default App;


