import React from 'react'
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';

/*
const handleClick = () => 1 + 1
*/

export interface ITodoItem {
  id: number,
  title: string
}

function LiftingStateUp() {
  const [todos, setTodos] = React.useState<ITodoItem[]>([]);

  function addTodo(title: string) {
    setTodos(prevState => [...prevState, {
      id: Date.now(),
      title
    }])
  }

  function deleteTodo(id: number) {
    console.log('deleteTodo: ', id)
  }

  return (
    <div>
      <h1>LiftingStateUp</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} />  

    </div>
  )
}

export default LiftingStateUp