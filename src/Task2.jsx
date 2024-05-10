import React from "react";
import CounterComponent from "./CounterComponent";

const Task2 = () => {

	return (
		<div>
			<div className="main-box">
				<CounterComponent term={1}/>
				<CounterComponent term={2}/>
				<CounterComponent term={3}/>
				<CounterComponent term={4}/>			

            <button className="reset">Reset</button>
            <div className="sum-box">
            sum 0
            </div>
			</div>
		</div>
	);
};

export default Task2;
