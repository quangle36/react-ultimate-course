

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
import useResizeWindow from "./hooks/useResizeWindow";

const Alert = React.memo(() => {
  console.log('alert render')
  return <div>Alert</div>
})

function PerformanceHook() {
  const { isSmallScreen } = useResizeWindow({});
  const [totalCard, setTotalCard] = React.useState(0)
  const [card, setCard] = React.useState({
    title: '',
    description: ''
  })

  const totalMemorie = React.useMemo(() => {
    console.log('useMemo')
    return totalCard + 100;
  }, [totalCard]);


  // function  re-created each component re-render
  function updateTotalCard() {
    setTotalCard(prevState => prevState + 1)
  }

  const updateTitleCard = React.useCallback(() => {
    console.log("totalCard: ", totalCard)
    // setTotalCard(totalCard + 1)
    setCard(prevState => ({
      ...prevState,
      title: 'Title',
    }))
  }, [totalCard])
  // const updateTitleCard = () => {
  //   setTotalCard(totalCard + 1)
  //   setCard(prevState => ({
  //     ...prevState,
  //     title: 'Title',
  //   }))
  // }

  return (
    <div>
      <h1>PerformanceHook</h1>
      Total Card: {totalCard} <br />
      Demo useMemo: {totalMemorie} <br />
      Check Screen Size: {isSmallScreen ? 'small' : 'large'} <br />
      <button type="button" onClick={updateTotalCard}>Update Total Card</button>
      <button type="button" onClick={updateTitleCard}>Update Title Card</button>

      <CardPerformance card={card} updateTitleCard={updateTitleCard} />

      <Alert />
    </div>
  )
}

export default React.memo(PerformanceHook)