import JSX from './JSX';
import Props from './Props';
import QuangColorBox from './sample-app/QuangColorBox/QuangColorBox';
import State from './State';
import HandleEvent from './HandleEvent';
import ListKey from './ListKey';
import LiftingStateUp from './LiftingStateUp';
import TonyColorBox from './sample-app/QuangColorBox/TonyColorBox';
import DatColorBox from './sample-app/Dat/DatGenerateBox';

function App() {
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
