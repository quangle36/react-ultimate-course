import React from 'react';
import Button from '../Button'

interface TodoFormProps {
  addTodo: (title: string) => void
}


function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = React.useState('');

  return (
    <>
      <input type="text"  value={text} onChange={e => setText(e.target.value)} /> 
      <Button buttonText='Add Todo' onClick={() => addTodo(text)} />
      <br />
    </>
  )
}

export default TodoForm