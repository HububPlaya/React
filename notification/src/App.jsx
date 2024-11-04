import react, { useState } from 'react'
import Notification from './components/Notification'


const App = () => {

  return (
    <>
      <Notification 
        messages={["message 1", "message 2", "message 3"]}
      />
    </>
  )
}

export default App
