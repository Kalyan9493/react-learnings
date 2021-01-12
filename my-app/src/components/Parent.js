import React, { PureComponent } from 'react'
import Child from './Child'

class Parent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "parent"
        }
        this.handler = this.handler.bind(this)
    }

    handler(child){
        alert( `Hello ${this.state.parentName}  from ${child}`)
    }
    render() {
        return (
            <div className="App">
                <Child handler={this.handler}/>
            </div>
        )
    }
}

export default Parent