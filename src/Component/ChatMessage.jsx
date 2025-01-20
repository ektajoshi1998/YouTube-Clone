import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className=' flex p-2 shadow-sm'>
       <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className='font-bold pl-1 pr-2'>{name} </span>
      <span >{message}</span>
    </div>
  )
}

export default ChatMessage
