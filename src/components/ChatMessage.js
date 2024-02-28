import React from 'react'

const ChatMessage = () => {
  return (
    <div className='flex items-center p-2'>
        <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU"
                alt="profile"
                className="h-7"
              />
              <span className='font-bold'>Abrar Dhukka</span>
              <span className='px-2'> Hey Abrar here</span>
    </div>
  )
}

export default ChatMessage