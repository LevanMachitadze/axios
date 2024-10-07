import React, { useState } from 'react';
import FetchData from './components/FetchData';

const App = () => {
  const [showFetchData, setShowFetchData] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleFetchData = () => {
    setShowFetchData((prev) => !prev);
  };
  const incrementNumber = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Increment Number: {counter}</p>
      <button onClick={incrementNumber}>click</button>

      <button onClick={toggleFetchData}>Button</button>

      {showFetchData && <FetchData value={counter} />}
    </>
  );
};

export default App;
