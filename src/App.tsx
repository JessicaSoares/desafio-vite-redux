import  { useState } from 'react'

import { Button } from '@mui/material'

import Header from '@/components/Header'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'
import { DatePicker } from '@mui/x-date-pickers'

function App() {

  const [count, setCount] = useState(0)

  const [contar, setContar] = useState(0)
  return (
    <>
      <div>
        <Header />
        <DatePicker label="Basic date picker" />
        <a href="https://vitejs.dev" 
          target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
       className="card">
        
        <Button color='primary' variant='contained' onClick={() => setCount((count) => count + 5)}>
          count is 
          {' '}
          {count}
        </Button>

        <div>
          <p>
            Você clicou
            {' '}
            {contar}
            {' '}
            vezes
          </p>
          <button onClick={() => setContar(contar + 5)}>
            Clique aqui
          </button>
        </div>
        <p>
          Edit 
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

