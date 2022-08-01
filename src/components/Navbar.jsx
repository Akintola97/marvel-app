import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

function refresh(){
  window.location.reload()
}

  return (
     <div className='bg-black w-full h-full'>
      <Link to = '/'>
      <h1 onClick={refresh}  className='text-white text-center text-[5vmin] p-4'>Marvel Characters</h1>
      </Link>
    </div>
  )
}

export default Navbar