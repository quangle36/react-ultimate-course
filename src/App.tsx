import JSX from './JSX';
import Props from './Props';
import QuangColorBox from './sample-app/QuangColorBox/QuangColorBox';
import State from './State';
import HandleEvent from './HandleEvent';
import ListKey from './ListKey';
import LiftingStateUp from './LiftingStateUp';
import TonyColorBox from './sample-app/QuangColorBox/TonyColorBox';
import DatColorBox from './sample-app/Dat/DatGenerateBox';
import Form from './Form';
import StateHook from './StateHook';
import EffectHook from './EffectHook';
import React from 'react';
import Button from './components/Button';

function App() {
  const [isUnmounted, setIsUnmounted] = React.useState(true)
  return (
    <>
      <JSX />
      <br />
      <QuangColorBox />
      <Props />

      <br />

      <State />
      <br />

      <HandleEvent />
      <br />
      <ListKey />

      <br />
      <LiftingStateUp />

      <br />
      <TonyColorBox />

      <br />
      <DatColorBox />

      <br />
      <Form />

      <br />
      <StateHook />

      <br />
      <Button 
        buttonText='Test Unmounted'
        onClick={() => setIsUnmounted(prevState => !prevState)}
      />
      {isUnmounted && (
        <EffectHook />
      )}


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
