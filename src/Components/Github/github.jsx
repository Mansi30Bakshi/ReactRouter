import React, { useEffect, useState } from 'react'

const Github = () => {
  const[data,setData] = useState([]);
 useEffect(() => {
   fetch('https://api.github.com/users/Mansi30Bakshi')
   .then(response => response.json())
   .then(data => {
    console.log(data);
    setData(data);
   })
 }, [])
 
  return (
    <div className='text-center text-white text-6xl bg-orange-700 p-4 m-3'>Github Followers :{data.followers}
    <img className='rounded-xl'src={data.avatar_url} alt='git picture' width={300} ></img>
     </div>
  )
}

export default Github