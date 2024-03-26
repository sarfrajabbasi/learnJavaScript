import React from 'react'

// with jsx

// export const Hello = ()=>{
//     return <h1 className='mybc'>Hello Sarfraj,how are you?</h1>
// }




// without jsx
export const Hello = ()=>{
    return React.createElement(
        'div',
        {id:'hello',className:'dummyclass'},
        React.createElement('h1',null,'sarfraj,How are you?')
    )
   
}
