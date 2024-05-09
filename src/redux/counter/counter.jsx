import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(incremented())}>+</button>
        <button onClick={() => dispatch(decremented())}>-</button>
      </div>
    </div>
  );
};

export default Counter;
