import React, { PureComponent } from 'react'

class Conditional extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // 1. using if-else Approach
        // if(this.state.isLoggedIn){
        //     return <div className="App">Welcome Kalyan Reddy</div>
        // }else{
        //     return <div className="App">Welcome Guest</div>
        // }


        // 2. Using Element VAriable Approach
        // let element
        // if(this.state.isLoggedIn){
        //     element = <div className="App">Welcome Kalyan Reddy</div>
        // }else{
        //     element = <div className="App">Welcome Guest</div>
        // }
        // return <div className="App">{element}</div>

        // 3. Using Ternary Operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div className="App">Welcome Kalyan Reddy</div> :
        //     <div className="App">Welcome Guest</div>
        // )
        // 4. Using Short Circuit Method , this used only in specific case that if value is tre it render ,otherwise render nothing
        return this.state.isLoggedIn && <div className="App"> Welcome Kalyan Reddy</div>
    }
}

export default Conditional