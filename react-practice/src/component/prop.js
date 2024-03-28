import React ,{Component} from 'react'


const MyName = (props)=> {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
};

// props in class
export class Hola extends Component{
    render(){
        return (
            <h1>Welcome,{this.props.name}!</h1>
        )
    }
}

export  default MyName

