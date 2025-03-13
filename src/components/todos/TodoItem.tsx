import React from 'react'
import Button from '../Button'
import { ITodoItem } from '../../LiftingStateUp'

interface TodoItemProps {
  todo: ITodoItem,
  deleteTodo: (id: number) => void
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <div>
      {todo.title} 
      <Button buttonText='Delete' onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}

export default TodoItem