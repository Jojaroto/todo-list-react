import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify)
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, { id: uuid(), name: name, complete: true}]
    })
    todoNameRef.current.value = null
  }

  return (
  <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type='text'/>
    <button onClick={handleAddTodo}>add</button>
    <button>clear</button>
    <div>0 left</div>
  </>
  )
}

export default App;
