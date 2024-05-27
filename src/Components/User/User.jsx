import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
  const {userid} = useParams()
  return (
    <div className="bg-orange-700 text-6xl p-4 text-center">USER : {userid}</div>
  )
}

export default User