import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>My name is {props.name} and with age {props.age}</p>
        <p>{props.children}</p>
        {/* <input type="text"></input> */}
    </div>
    )}

export default person;