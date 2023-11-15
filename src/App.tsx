import  { useState, useEffect } from 'react'

import { Button } from '@mui/material'

import './App.css'
import { DatePicker } from '@mui/x-date-pickers'

import reactLogo from './assets/react.svg'
import { Loading } from './components/Loading'

import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo} from './redux/actions/todo.action'
import { Dispatch } from './@types/dispatch'
import { ReduceType } from './@types/todo.type'
import { StatusEnum } from './enums/todo.enum'

function App() {

  const dispatch:Dispatch = useDispatch()

  const {todoReducer: {fetching}} = useSelector((state: ReduceType) => state)

  useEffect(() => {
    //dispatch(getTodos())
    dispatch(addNewTodo({

      title:'jess',
      description:'teste',
      status:StatusEnum.PENDING,
      date: new Date().toISOString()


    }))


  }, [])

  const [isLoading,setIsLoading] = useState(false)

  const [count, setCount] = useState(0)

  const [contar, setContar] = useState(0)

  return (
    <>
      <div>
        <Loading trigger={fetching}/>
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
        
        <Button color='primary' variant='contained'>
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

