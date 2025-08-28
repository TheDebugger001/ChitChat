import React from 'react'
import Navbar from './Navbar'
import TalkBar from './TalkBar'
import Message from './Message'

const MessageBody = (messages) => {
  const message = messages.message
  return (
    <div className='w-10/13 h-full flex flex-col items-center justify-between'>
      <Navbar />
      <div className='w-full h-full'>
        <Message messages={message} />
      </div>
      <div className='w-full h-15  flex items-center justify-center relative -top-2'>
         <TalkBar />
      </div>
    </div>
  )
}

export default MessageBody