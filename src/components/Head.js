import React, { useState } from 'react'
import { useData } from '../utils/DataContext'

const Head = () => {

 const {menuHandler}=useData()
  return (
    <div className='flex shadow-lg'>
        <div className='w-[10%] flex items-center justify-center'>
        <button className='cursor-pointer' onClick={menuHandler}>
       <img src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png' alt='hamburger' className='h-4 ml-12 mr-4'></img></button>
        <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt='logo' className='h-16 ml-4'></img>
        </div>

        <div className='w-[75%] flex justify-center items-center'>
        <input type='text' className='border-2 p-2 my-2 border-gray-300 rounded-l-full w-[50%]' placeholder='Search'></input>
        <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnVMpxvmkJHTSJYC5M4KnzuTzzZV-_FJQN9QJZchDUFbUUbgDZ' alt='search' className='h-[44px] border-2 border-gray-300 rounded-r-full'></img>
        </div>

        <div className=' w-[15%] flex justify-center items-center'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU' alt='profile' className='h-11'></img>
        </div>
    </div>
  )
}

export default Head


