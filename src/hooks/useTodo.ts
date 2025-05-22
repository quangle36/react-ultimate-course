import React from "react"

export interface ITodo {
  id: number,
  title: string,
  completed: boolean
}

export const useTodo = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    { id: 1, title: 'react', completed: false }
  ]);

  function onAddItem(title: string) {
    const newItem = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos(prevState => [...prevState, newItem])
  }

  function onDeleteItem(todoId: number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId ))
  }

  function onUpdateItem(todoId: number) {
    setTodos(prevState => {
      const clonedTodo = [...prevState];
      const index = clonedTodo.findIndex(todo => todo.id === todoId);

      if (index === -1) return prevState;
      clonedTodo[index].completed = !clonedTodo[index].completed;
      return clonedTodo
    })
  }

  return { 
    todos,
    onDeleteItem,
    onUpdateItem,
    onAddItem
  }
}