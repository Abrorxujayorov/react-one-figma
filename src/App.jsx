import { useState } from 'react'
import Header from './container/header/header'
import Main from './container/main/main'
import './control.scss'

function App() {
  return (
    <div className="control">
      <Header />
      <Main />
    </div>
  )
}

export default App
