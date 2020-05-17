import React, { Component } from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // }
  shouldComponentUpdate(nextProps, NextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { mesg: 'SnapshotBeforeUpdate' };
  }

  componentDidUpdate(prevProps, prevState, SnapshotBeforeUpdate) {
    console.log('[Persons.js] componentDidUpdate', SnapshotBeforeUpdate);
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
