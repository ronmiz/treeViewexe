import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const App  = props => {

  const [personsState, setPersonsState] = useState(
    {
        persons: [
          {name:'max', age:20},
          {name:'Guig', age:23},
          {name:'Ron', age:24}
        ]
      }
  )

  const switchNameHandler = () =>{
    setPersonsState ( {
          persons: [
            {name:'maBobox', age:20},
            {name:'Guig', age:23},
            {name:'Ron', age:300}
          ]
        }
      )
    }
    return (
      <div className="App">
        <button onClick={switchNameHandler}>switch state</button>
          <h1> hi from ron</h1>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > this is my wifes name</Person>
          <Person name={personsState.persons[2].nmae} age={personsState.persons[2].age} />
      </div>
    );
}

export default App;


