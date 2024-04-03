import React, { Component } from "react";
import ChildComponent from "./childComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this)
  }

  /**
     * @param {any} childName
     */
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  render() {
    return <div>
        <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
    </div>;
  }
}

export default ParentComponent;
