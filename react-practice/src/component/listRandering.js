import React from 'react'
import Person from './person'
function NameList() {
  const persons = [
    {
      id:1,
      name:'Bruce',
      age:20,
      skill:"React"
    },
    {
      id:2,
      name:'bettty',
      age:20,
      skill:"Jquery"
    },
    {
      id:3,
      name:'pinky',
      age:20,
      skill:"Angluar"
    },
    {
      id:4,
      name:'babulal',
      age:21,
      skill:"JSSupari"
    },
  ]
  // List and keys
    const personList  = persons.map((person)=> <Person key={person.id} person={person}></Person> )
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList


