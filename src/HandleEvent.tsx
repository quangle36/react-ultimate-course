/*
&&: theo vế phải/trái
- khi vế trái true, thì get vế phải
- //          false, thì get vế trái

' ' && 'tony' -> ' '
'tony' && '' -> ' '
'tony' && 'dat' && 'quang' -> quang

||: nó sẽ lấy vế mà là true đầu tiên
tony || dat || quang -> tony
'' || dat || quang -> dat
*/

import React from "react";

function HandleEvent() {
  const [todos, setTodos] = React.useState([]);
  
  // click -> () => {} -> execute function
  function handleClick(id: number) {
    console.log('handleClick', id)
  }

  // click -> execute function
  const handleCurryFunction = (id: number) => () => {
    console.log('handleCurryFunction', id)
  }

  return (
    <div>
      <h1>HandleEvent</h1>
      {todos && Array.isArray(todos) && todos.map(todo => (
        <div>Title: {todo.title}</div>
      ))}

      <div onClick={() => handleClick(1)}>please checlick</div>

      <div onClick={handleCurryFunction(1)}>please curry function</div>
    </div>
  )
}

export default HandleEvent