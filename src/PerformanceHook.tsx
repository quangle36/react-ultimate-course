

/* shallow comparison/deep comparison (equality)
shallow comparison
const objA = {
  firstName: 'tony',
  lastName: 'nguyen',
  address: {
    city: 'tphcm
  }
};
const objB = {
  firstName: 'tony',
  lastName: 'nguyen',
  address: {
    city: 'tphcm
  }
};;

objA === objB; // false

for ObjectA, Object B => get value each object
=> objA.firstName === objB.firstName && 
objA.lastName === objB.lastName &&
objA.address === objB.address
=> false 
*/

import React from "react";
import CardPerformance from "./components/CardPerformance";

const Alert = React.memo(() => {
  console.log('alert render')
  return <div>Alert</div>
})

function PerformanceHook() {
  const [totalCard, setTotalCard] = React.useState(0)
  const [card, setCard] = React.useState({
    title: '',
    description: ''
  })

  // function  re-created each component re-render
  function updateTotalCard() {
    setTotalCard(prevState => prevState + 1)
  }

  // const updateTitleCard = React.useCallback(() => {
  //   setTotalCard(totalCard + 1)
  //   setCard(prevState => ({
  //     ...prevState,
  //     title: 'Title',
  //   }))
  // }, [])
  const updateTitleCard = () => {
    setTotalCard(totalCard + 1)
    setCard(prevState => ({
      ...prevState,
      title: 'Title',
    }))
  }

  console.log('PerformanceHook render', {
    totalCard,
    card
  })

  return (
    <div>
      <h1>PerformanceHook</h1>
      Total Card: {totalCard}
      <button type="button" onClick={updateTotalCard}>Update Total Card</button>
      <button type="button" onClick={updateTitleCard}>Update Title Card</button>

      <CardPerformance card={card} updateTitleCard={updateTitleCard} />

      <Alert />
    </div>
  )
}

export default React.memo(PerformanceHook)