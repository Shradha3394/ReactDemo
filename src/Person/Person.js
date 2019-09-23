import React from "react";

const person = props => {
    console.log(props);
    return (
        <div>
            <p>Hello {props.name}</p>
            <button onClick={(() => props.delete(props.index))}>delete</button>
            <input value={props.name} placeholder="Edit your name" type="text" onChange={(event) => props.change(event, props.index)}/>
        </div>
    )
}

export default person;