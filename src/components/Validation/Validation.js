import React from "react";

const validation = props => {
    let validationMessage = "";
    if(props.length <= 0)
        validationMessage = "Name is required";
    else if(props.length < 2 || props.length > 20)
        validationMessage = "The name should be between 2 to 20 characters"

    return <div>{validationMessage}</div>
}

export default validation;