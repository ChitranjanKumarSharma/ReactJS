import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardOne } from './components/cards'



function App() {
  

  return (
    <>
      <h1 className='bg-gray-400 text-black p-5 rounded-lg mb-5'>Tailwind CSS</h1>


      
     <CardOne channel= " Chitranjan"></CardOne>
     <CardOne></CardOne>

    </>
  )
}

export default App
