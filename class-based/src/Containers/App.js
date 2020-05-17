import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] costructor');
  }
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockpit: true
  };
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] componentDidUpdate ');
    // if (nextProps.persons !== this.props.persons) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  deletePersonHandler = personIndex => {
    const per = [...this.state.persons];
    per.splice(personIndex, 1);
    this.setState({ persons: per });
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount ');
  }

  changeNameHandler = (event, id) => {
    // find index by id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //get copy of person from state by index
    const person = {
      ...this.state.persons[personIndex]
    };
    //set new value for name
    person.name = event.target.value;
    //get copy of person object fom state
    const persons = [...this.state.persons];
    //get
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  toggelShowPesrons = () => {
    const isShow = this.state.showPersons;
    this.setState({
      showPersons: !isShow
    });
  };

  render() {
    console.log('[App.js] render');
    let personList = null;

    if (this.state.showPersons) {
      personList = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      );
    }
    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          toggle cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLenght={this.state.persons.length}
            clicked={this.toggelShowPesrons}
          />
        ) : null}
        {personList}
      </WithClass>
    );
  }
}

export default App;
