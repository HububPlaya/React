import { useState } from 'react'
import Section from "./section/section"
import Avatar from './avatar/avatar'
import Card from './card/card'
import './App.css'

const App = () => {

  return (
    <>
      <Section>
        <Avatar/>
        <Card/>
      </Section>
    </>
  )
}

export default App
