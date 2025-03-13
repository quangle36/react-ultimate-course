import TodoItem from './TodoItem'

import { ITodoItem } from '../../LiftingStateUp';

interface TodoListProps {
  todos: ITodoItem[],
  deleteTodo: (id: number) => void
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  ) 
}

export default TodoList