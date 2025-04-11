import React, { useState } from "react";

const HookCounter = () => {
    const intialState = 0;
  const [count, setCount] = useState(intialState);

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => setCount(intialState)}> reset</button>
      <button onClick={() => setCount(prevState => prevState + 1)}> Increse</button>
      <button onClick={() => setCount(prevState => prevState -1 )}> decrease</button>
      <button onClick={() => setCount(prevState => prevState +5 )}> Increse5</button>
      <button onClick={() => setCount(prevState => prevState -5 )}> decrease5</button>
    </div>
  );
};

export default HookCounter;