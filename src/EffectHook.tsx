import React from 'react'
import Button from './components/Button';

/* effect hook
- empty dependency: [] -> run once time when component first render (not run re-render)
- not dependency: -> run every component render (first, re-render)
- has dependency: -> run for component first render, and just run again when dependency changes 

clean up function useEffect
- just run when component re-render & un-mounted
- not run in first render

*/

interface ITodo {
  id: number,
  title: string
}

function EffectHook() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [reset, setReset] = React.useState(false);

  React.useEffect(() => {
    console.log('useEffect with empty dependency');
  
    return () => {
      console.log('clean up useEffect with empty dependency');
    }
  }, []) 

  React.useEffect(() => {
    console.log('useEffect no dependency')

    return () => {
      console.log('clean up useEffect with no dependency');
    }
  })

  React.useEffect(() => {
    console.log('useEffect with dependency')
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3&_page=${page}`);
      const data = await res.json();
      setTodos(data)
    }
    fetchData();

    return () => {
      console.log('clean up useEffect with dependency');
    }
  }, [page]); 

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log('timer: ', count)
      setCount(prevState => prevState + 1);
    }, 10000)
  
    return () => {
      setCount(1);
      clearInterval(timer);
      console.log('clean up useEffect with empty dependency');
    }
  }, [ reset]) 

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependency');
  
    return () => {
      console.log('clean up useLayoutEffect with empty dependency');
    }
  }, []) 

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependency');
  
    return () => {
      console.log('clean up useLayoutEffect with no dependency');
    }
  })


  
  console.log('-------------------render ')
  return (
    <div>
      <h1>EffectHook</h1>
      Count Timer: {count} <br />

      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}

      <Button 
        buttonText='Update Count'
        onClick={() => setCount(prevState => prevState + 1)}
      />
      <Button 
        buttonText='Add Todo'
        onClick={() => {
          setTodos(prevstate => [...prevstate, { 
              id: Date.now(), 
              title: 'Title' + Date.now() 
            }
          ])
        }}
      />
      <Button 
        buttonText='Next Page'
        onClick={() => setPage(prevState => prevState + 1)}
      />
       <Button 
        buttonText='Reset Count'
        onClick={() => setReset(prevState => !prevState)}
      />

      <div>
        <div className='boxStyle boxStyle1' style={{ backgroundColor: '#f00' }}>Box1</div>
        <div className='boxStyle' style={{ backgroundColor: '#ff0' }}>Box2</div>
      </div>
    </div>
  )
}

export default EffectHook