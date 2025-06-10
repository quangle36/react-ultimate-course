import React from 'react'
import Button from './components/Button'

/*
uncontroller form / uncontroller input / uncontroller component
- Uncontrolled inputs are like traditional HTML form input field.
- You can then get their value using a ref.
- The input value is not being managed by React.
- Don’t cause re-render component.

controller form / controller input / controller component
*/

function Form() {

  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const [lastName, setLastName] = React.useState('tony');


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const first_name = document.getElementById('firstName');
    console.log('handleSubmit', {
      firstName: firstNameRef?.current?.value,
      lastName
    })
  }

  function onChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value)
  }
  
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input id="firstName" defaultValue="abc" type="text" ref={firstNameRef} />
        <br />
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={onChangeLastName} />

        <Button 
          type="submit"
          buttonText="Submit"
        />
      </form>

     
    </div>
  )
}

export default Form