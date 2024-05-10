import { useState } from "react";
import Task1 from "./Task1";
import "./index.css";
import Task2 from "./Task2";
function App() {
	const [task1, setTask1] = useState(true);
	const [task2, setTask2] = useState(false);

	const shiftTask = () => {
		setTask1((prev) => !prev);
		setTask2((prev) => !prev);
	};
	return (
		<>
			{task1 && <Task1 />}

			{task2 && <Task2 />}

			<button className="shift-btn" onClick={shiftTask} >Shift Task</button>
		</>
	);
}

export default App;
