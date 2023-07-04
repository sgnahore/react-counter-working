import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 1);
  };

  const handleMinusFive = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue - 5);
  };

  const handleMinusOne = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue - 1);
  };

  const handlePlusFive = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 5);
  };
  const handleReset = () => {
    queueRerenderWithNewCounterValue(
      previousValue => previousValue - previousValue
    );

    // TODO reset counter to 0 here
  };

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleMinusFive}>-5</button>
      <button onClick={handleMinusOne}>-1</button>
      <button onClick={handlePlusFive}>+5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
