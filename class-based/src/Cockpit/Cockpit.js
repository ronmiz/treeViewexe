import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timerA = setTimeout(() => {
      alert('save to db');
    });
    return () => {
      console.log('[Cockpit.js] useEffect cleaup');
      clearTimeout(timerA);
    };
  }, []);
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  const assigendClasss = [];
  if (props.personsLenght <= 2) {
    assigendClasss.push(classes.red);
  }
  if (props.personsLenght <= 1) {
    assigendClasss.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assigendClasss.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        toggel show persons
      </button>
    </div>
  );
};

export default cockpit;
