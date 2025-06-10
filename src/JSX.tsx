import React from "react";
import { useSelector } from "react-redux";

function JSX() {
  const labelChart = useSelector(store => store.chart.options.label);
  console.log('state redux============================: ', labelChart)

  const sum = 1 + 1;

  const renderButton = (
    <button type="button">Count</button>
  );

  function renderTitle() {
    return (
      // <>
      //   <span>title</span>
      //   <span>tony</span>
      // </>
      <React.Fragment key={1}>
        <span>title</span>
        <span>tony</span>
      </React.Fragment>
    )
  }

  function calculate(a: number) {
    return a + 10;
  }

  return (
    <div>
      <h1>JSX</h1>
      <br />
      Express: {sum} <br />
      Function: {calculate(10)} <br />
      Render Button: {renderButton} <br />
      Title: {renderTitle()} <br />
      Closed element: <input />
    </div>
  )
}

export default JSX