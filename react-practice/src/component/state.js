import React,{Component} from 'react'


class Message extends Component {
    constructor(){
        super()
        // state is nothing but object that privately maintain inside the component and state can be change within the component
        this.state = {
            message:'Welcome visitor'
        }
        this.handleClick = this.handleClick.bind(this)
    }
  render() {
    return (
      <div>
        <h1 className='heading'>{this.state.message}</h1>
        <button onClick={this.handleClick}>Subscribe</button>
      </div>
    )
  }
  handleClick = ()=>{
    this.setState({
        message:'Thank you for Subscribing!'
    });
  }
}


export default Message
