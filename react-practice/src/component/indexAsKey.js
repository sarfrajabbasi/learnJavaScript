import React from 'react'

function MyList() {
    const names = ['russia','china','America','America'];
    const nameList = names.map((name,index)=> <h1 key={index}>{index} : {name}</h1>)
  return (
    <div>
{nameList}
    </div>
  )
}

export default MyList