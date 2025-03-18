import React from 'react'
import Button from './components/Button';

/*
- first render -> render with initial state value
- next render (re-render) -> re-render with new state
- unmounted

closure function
function outerFunction() {
  var i = 0;
  function innerFunction() {
    i = i + 1;
    return i + 10
  }
}
*/

function initializeState() {
  console.log('initializeState')
  return 1
}

function StateHook() {
  const [count, setCount] = React.useState(initializeState); // 0

  function updateCount() {
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    // setCount(prevState => {
    //   return prevState + 1
    // });
    // setCount(prevState => {
    //   return prevState + 1
    // });
    // setCount(prevState => {
    //   return prevState + 1
    // });
  }

  console.log('StateHook: ', count)
  return (
    <div>
      <h1>StateHook</h1>

      Count: {count} <br />
      <Button
        buttonText='Update Count'
        onClick={updateCount}
      />
    </div>
  )
}

export default StateHook