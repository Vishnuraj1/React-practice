import React from 'react'


// const State = (props) => {
//   return (
//     <div className='bg-warning m-3 p-4'>
//       <h1 >State: {props.name}</h1>
//       <h3>Language: {props.language}</h3>
//       <h5>Population: {props.population}</h5>
   
//     </div>
//   )
// }

// we can remove the props by destructuring the passing array 
// const State = (name,language,population) => {
//   return (
//     <div className='bg-warning m-3 p-4'>
//       <h1 >State: {name}</h1>
//       <h3>Language: {language}</h3>
//       <h5>Population: {population}</h5>
   
//     </div>
//   )
// }

// In here we are going to pass the objects as an array 
const States = ({ states }) => {

  return (
<div>
    {/* use the passed object variable for mapping */}
    {states.map((state)=>(
        
        <div className='bg-warning m-3 p-4'>
        <h1 >State: {state.name}</h1>
        <h3>Language: {state.language}</h3>
        <h5>Population: {state.population}</h5>
        </div>
    )
       
    )}
</div>
   
      
    

   
  )
}

export default States
