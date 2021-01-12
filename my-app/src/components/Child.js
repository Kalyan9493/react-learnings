import React from 'react'

function Child(props) {
    return (
        <div className="App">
            <button onClick={() => {props.handler("Child")}} >Greet Parent</button>
        </div>
    )
}

export default Child
