import React from 'react'
import clsx from 'clsx'
import Button from './components/Button';
/*
Demo List & Key:
https://stackblitz.com/edit/vitejs-vite-xmvhtb?file=src%2FApp.jsx,src%2FAppUniqueId.jsx,src%2Fmain.jsx

*/
interface ITodo {
  id: number,
  title: string
}

const color = 'red';

function ListKey() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'react '}
  ]);

  const items = todos.map(todo => {
    return (
      <div>{todo.title}</div>
    )
  })

  const todos2: React.ReactNode[] = [];
  todos.forEach(todo => {
    const item = (
      <div>{todo.title}</div>
    )
    todos2.push(item)
  })

  return (
    <div>
      <h1>ListKey</h1>

      {todos.map(todo => (
        <div 
          key={todo.id} 
          // className={`
          //   text-20 items-center justift-center 
          //   ${todos.length > 0 ? 'black' : 'red'}
          // `}
          className={clsx(
            'text-20 items-center justift-center',
            todos.length > 0 ? 'black' : 'red',
          )}
        >
          Title: {todo.title}
        </div>
      ))}

      {items} <br />
      For each to render: {todos2} <br />
      <Button 
        buttonText='Delete'
        className='border-0'
      />
    </div>
  )
}

export default ListKey