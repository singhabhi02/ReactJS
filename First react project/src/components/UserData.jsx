import React from 'react'

const UserData = ({student}) => {
  return (
    <div>
        <h2>{student.name}</h2>
        <h2>{student.email}</h2>
        <p>{student.age}</p>
        <h3>{student.city}</h3>
    </div>
  )
}

export default UserData;