import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxilliry from '../../../hoc/Auxilliry';

class Person extends Component {
  render() {
    return (
      // <div className={classes.Person}>
      <Auxilliry>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilliry>
      // </div>
    );
  }
}

export default Person;
