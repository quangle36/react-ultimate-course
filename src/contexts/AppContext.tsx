import React from 'react';

interface ITodo {
  id: number,
  title: string
}

interface IAppContext {
  todos: ITodo[],
  addTodo: (item: ITodo) => void
}

export const AppContext = React.createContext<IAppContext>({
  todos: [],
  addTodo: () => {}
});

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  function addTodo(todoItem: ITodo) {
    setTodos(prevState => [...prevState, todoItem])
  }
  
  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext)