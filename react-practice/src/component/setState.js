import React, { Component } from 'react'
// snippet:- rce
 class Counter extends Component {
    // snippet is rconst
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        // UI not rerendering when state is change that is the main  reason you don't modifye state directly,

        // this.state.count = ++(this.state.count)
        // instead make use setState(),it let know the react to rerender the component
        // calls to setState are asyncronous,meaning the state may not be immediately updated, To execute code after the state has been updated, use the callback function as the second parameter to `setState`.
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     // console.log(arguments[0]);
        //     console.log("callbackValue",this.state.count);
        // })
        // second parameter to this function is the props objects,when state depend on props .
        this.setState((prevState,props)=>({count:prevState.count+1}))
        console.log(this.state.count);
    }
    incrementFive(){
        for(let i=1;i<=5;i++){
            this.increment()
        }
    }
  render() {
    return (
        <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=> this.increment()}>Increment</button>
        <button onClick={()=> this.incrementFive()}>IncrementFive</button>
        </div>
    )
  }
}

export default Counter

