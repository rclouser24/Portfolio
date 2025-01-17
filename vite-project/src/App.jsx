import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)//do i need it

  return (
    <>
      <h1>Hello There</h1>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
