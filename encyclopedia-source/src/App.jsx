import react, { useState } from 'react'
import Card from './components/Card'


const App = () => {

  return (
    <>
      <h1>Encyclopedia Sources</h1>

      <Card 
        link="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/introduction-to-react/sun.png" 
        alt="image 1 didn't render" 
        description= "The sun shone brightly, casting a warm glow across the tranquil beach."
      />

      <Card 
        link="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/introduction-to-react/mountain.png" 
        alt="image 2 didn't render" 
        description= "The hiker gazed in awe at the majestic mountain towering before them."
      />
    </>
  )
}

export default App
