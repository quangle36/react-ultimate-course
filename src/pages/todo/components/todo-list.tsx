import { ITodo } from "../../../hooks/useTodo"

interface TodoListProps {
  todos: ITodo[],
  onDeleteItem: (todoId: number) => void,
  onUpdateItem: (todoId: number) => void
}

function TodoList({ todos, onDeleteItem, onUpdateItem }: TodoListProps) {

  return (
   <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow mb-8"
        >
          <p
            className="mb-3 font-normal"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </p>
          <div className="flex items-center justify-end">
            <button
              className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 rounded-lg mr-2"
              onClick={() => onDeleteItem(todo.id)}
            >
              Delete
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              onClick={() => onUpdateItem(todo.id)}
            >
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </div>
        </div>
      ))}
   </>
  )
}

export default TodoList