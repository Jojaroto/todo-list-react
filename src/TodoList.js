import React from 'react'
import Todo from './todo'

export default function TodoList({ todos }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })
  )
}
