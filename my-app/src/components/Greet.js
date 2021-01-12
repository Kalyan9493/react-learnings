import React from 'react'

let Greet = props => {
    return (
        <div className="App">
            <h1>My name is  {props.name} and age is {props.age}</h1>
        </div>
    )
}

export default Greet
