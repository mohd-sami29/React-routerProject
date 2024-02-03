import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center font-bold bg-blue-400 p-2 text-lg'>User : {id} </div>
  )
}

export default User