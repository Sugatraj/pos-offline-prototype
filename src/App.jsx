import { useState } from 'react'
import './App.css'
import Login from '@components/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '@components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
