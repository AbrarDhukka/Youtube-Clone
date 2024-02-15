import React from 'react'
import Sidebar from './Sidebar'
import MainBodySec from './MainBodySec'

const Body = () => {
  return (
    <div className='flex'>
         <Sidebar></Sidebar>
         <MainBodySec></MainBodySec>
    </div>
  )
}

export default Body