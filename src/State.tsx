import React from 'react'
import Button from './components/Button';
import { useAppContext } from './contexts/AppContext';

function State() {
  const { todos } = useAppContext();

  const [count, setCount] = React.useState(1);
  const [message, setMessage] = React.useState({
    text: '',
    author: 'Tony'
  }); // memory A

  function updateCount() {
    setCount(count + 1)
  }

  function updateMessage() {
    // message.text = 'Text' + Date.now();  // mutate memory A
    // replace object
    // const newMessage = {
    //   ...message, // copy all properties
    //   text: 'Text' + Date.now(),
    // }
    // setMessage(newMessage) // memory A

    // updater function (callback function)
    // syntax: arrow function
    setMessage((prevState) => {
      console.log("prevState: ", prevState)
      return {
        ...prevState,
        text: 'Text' + Date.now(),
      }
    })

  }

  console.log('State Render --------------', count);

  return (
    <div>
      <h1>State</h1>
      Demo Todo Context: 
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      <br />
      Count: {count} time{count > 1 ? 's' : ''} <br />
      Author: {message.author} <br />
      Text: {message.text}  <br />

      <Button buttonText='Update Count' onClick={updateCount} />

      <Button buttonText='Update Message' onClick={updateMessage} />
    </div>
  )
}

export default State