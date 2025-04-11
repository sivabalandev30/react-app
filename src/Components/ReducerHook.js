import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
      default: 
      return state;
  }
};
function ReducerHook() {
  const [count, dispatch]  = useReducer(reducer, initialState);
  return (
    <div>
        <p>Count value is {count}</p>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
    </div>
  );
}

export default ReducerHook;
