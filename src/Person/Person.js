import React from "react";

const person = (props) =>{
    return(
        <div>
            <p>I am the Person with Name {props.name} and with the age of {props.age}</p>
        </div>
    ) 
    
}

export default person;