import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
const CounterComponent = ({term}) => {
    const counter = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    // const [counter, setCounter] = useState(0)
	return (
		<div>
			<div className="content-box">
				<h4>Counter {term}</h4>

				<button onClick={() => dispatch(decrement(term))}>-</button>
				<span>{counter}</span>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>
		</div>
	);
};

export default CounterComponent;
