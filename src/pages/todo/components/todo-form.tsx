import { useTodoForm } from '../../../hooks/useTodoForm'

interface TodoFormProps {
  onAddItem: (title: string) => void
}

function TodoForm({ onAddItem }: TodoFormProps) {
  const { title, onChangeTitle } = useTodoForm();

  return (
    <div className="flex">
      <input
        type="text"
        className="w-[450px] mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={title}
        onChange={onChangeTitle}
      />
      <div className="w-[150px] shrink-0">
        <button
          type="button"
          className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => onAddItem(title)}
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}

export default TodoForm