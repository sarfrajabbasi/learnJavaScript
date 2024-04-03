import React ,{Component} from 'react'


const MyName = (props)=> {
    // console.log(props);
    return (
        // only one wrapper element
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

            // this.props.name is reserve in class unlike function where we need to specify
            <h1>Welcome,{this.props.name}!</h1>
        )
    }
}

export  default MyName

