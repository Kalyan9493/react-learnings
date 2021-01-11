import React, { PureComponent } from 'react'

class EventBind extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        this.handler = this.handler.bind(this)
    }

    handler(){
        this.setState({
            message: "Good Bye"
        })
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.message}</h1>
                {/* 1.approach with arrow function */}
                {/* <button onClick={() => this.handler()}>Click</button> */}
                {/* 2. using bind function */}
                {/* <button onClick={this.handler.bind(this)}>Click</button> */}
                <button onClick={this.handler}>Click</button>
            </div>
            
        )
    }
}

export default EventBind