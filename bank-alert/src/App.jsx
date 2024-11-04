import { useState } from 'react'
import Message from './components/Message'


function App() {

  return (
    <>
      <Message
        moneyAvailable={500}
        price={700}
        name={"xbox series x"}
      />
    </>
  )
}

export default App
