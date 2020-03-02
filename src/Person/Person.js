import React from 'react';
import './Person.css';

const person = (props) =>{
    return(
        <div>
        <p onClick={props.click}>I am {props.name} for Person with {props.age}  years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}>
        </input>
        </div>
    ) 
}

export default person;
