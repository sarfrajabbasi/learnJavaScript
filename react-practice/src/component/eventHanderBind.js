import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
          {/* most cases and also official react documentation,bind the event handler in constructor method  */}
          super(props)
          
          this.state = {
              message:'hello'
            }
            //   this.clickHandler = this.clickHandler.bind(this)
        }
        //   arrow function as class property
    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this);

clickHandler = ()=>{
        this.setState({ message:'GoodBye'})
         console.log(this);
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* bind clickhandler */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* arrow funtion */}
        {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
        <button onClick={ this.clickHandler}>Click</button>
      </div>
    )
  }
  }

export default EventBind