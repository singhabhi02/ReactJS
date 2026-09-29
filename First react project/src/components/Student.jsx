import React from 'react'

const Student = ({name , course , age ,isActive}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{course}</p>
        <h3>{age}</h3>
        <h3>{isActive}</h3>
    </div>
  )
}

export default Student;