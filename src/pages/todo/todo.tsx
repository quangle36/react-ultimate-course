import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import { useTodo } from '../../hooks/useTodo';

const Todo = () => {
  const { todos, onDeleteItem, onUpdateItem, onAddItem } = useTodo();

  return (
    <div className="p-4">
      <h1 className="text-[40px]">Todo App</h1>

      <TodoForm onAddItem={onAddItem} />

      <br />
      <br />

      <TodoList 
        todos={todos}
        onDeleteItem={onDeleteItem}
        onUpdateItem={onUpdateItem}
      />
    </div>
  );
};

export default Todo;
