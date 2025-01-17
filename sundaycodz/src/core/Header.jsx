import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
          <div className='bg-blue-200 p-4 rounded text-gray-600 m-2 flex flex-col items-center align-center sm:flex-row '>
            <div className='self-auto sm:flex-1 '><Link to="/"><h1 className='text-6xl font-bold underline'>logo</h1></Link></div>
            <div className='self-auto sm:flex-1  my-auto'>Apps</div>
            <div className='self-auto sm:flex-1  my-auto'>Tutorials</div>
            <div className='self-auto sm:flex-1  my-auto'>Help</div>
          </div>  
        </>
    )
}

export default Header
