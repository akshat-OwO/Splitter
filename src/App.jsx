import { useState } from 'react'

// import image
import logo from "./assets/images/logo.svg"

// components
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter logo" />
      <div className="container">
        <Form />
        <Display />
      </div>
    </div>
  )
}

export default App
