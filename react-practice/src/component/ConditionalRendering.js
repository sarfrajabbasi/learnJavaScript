import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  loggedIn = () => {
    this.setState({
      isLoggedin: true,
    });
  };
  render() {
    // let message;
    // if (this.state.isLoggedin) {
    //     message = <h1>welcome Sarfraj</h1>
    // }else{
    //     message = <h1>welcome Guest</h1>
    // }
    // return (
    //     <div>
    //      {message}
    //       <button onClick={this.loggedIn}>ClickMe</button>

    //     </div>
    //   );
    // return this.state.isLoggedin ? (
    //   <div>
    //     <h1>Welcome Sarfraj</h1>
    //   </div>
    // ) : (
    //   <div>
    //     <h1>Welcome Guest</h1>
    //   </div>
    // );
    return this.state.isLoggedin && (
        <div>
          <h1>Welcome Sarfraj</h1>
        </div>
      )
  }
}

export default UserGreeting;


