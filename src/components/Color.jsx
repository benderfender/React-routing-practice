import React from 'react';

const ColorComponent = props => {
    return (
    <p className="color:red;">The word is {props.word} <br></br> 
    {props.word} is in {props.color1} <br></br>
    Background color is {props.color2} </p>
    )
}

export default ColorComponent;