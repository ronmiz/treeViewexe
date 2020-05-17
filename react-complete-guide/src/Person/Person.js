import React  from 'react';

const person = (props) =>{
   return (
       <div>
           <p>I'm {props.name} and i am {props.age} yers old</p>
           <h2>{props.children}</h2>
       </div>
   )
}

export default person; 