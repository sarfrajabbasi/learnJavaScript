// recat snipped for function component:rfce

// import React from 'react'

// function ClickMe() {
//     function clickHandler(){
//         alert('button click')
//         // console.log('button Click');
//     }
//   return (
//     <div>
//         <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// event handling in class component

// react snippet for class component:rce

import React, { Component } from 'react'

class ClickMeClass extends Component {
    clickHandler(){
        alert('click me class')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClickMeClass</button>
      </div>
    )
  }
}

export default ClickMeClass


// export default ClickMe