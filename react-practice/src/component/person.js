import React from 'react'

function person({person}) {
  return (
    <div>
        <h1>  I am{person.name},I am {person.age} years old, i know {person.skill}</h1>
    </div>
  )
}

export default person

/* */