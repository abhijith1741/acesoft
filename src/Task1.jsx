import React from "react";
import { useEffect, useState } from "react";
import { apiFetch } from "./resultFetch";
function Task1() {
	const [result, setResult] = useState([]);

	const [loading, setLoading] = useState(true);
	const [errorFound, setError] = useState("");
	useEffect(() => {
		setTimeout(() => {
			apiFetch(setResult, setLoading, setError);
		}, 2000);
	}, []);

	const handleFetch = () => {
		setResult();
		setLoading(true);
		setTimeout(() => {
			apiFetch(setResult, setLoading, setError);
		}, 2000);
	};
	return (
		<div>
			{loading ? (
				<>
					<h1>Loading.....</h1>
					{errorFound ? <h2>Some Error Occured</h2> : ""}
				</>
			) : (
				<>
					<div className="button" onClick={handleFetch}>
						<button>Refresh</button>
					</div>
					<table>
						<thead>
							<th>Id</th>
							<th>Title</th>
							<th>Decription</th>
						</thead>
						<tbody>
							{result?.map((item) => {
								return (
									<>
										<div className="data-row">
											<tr>{item?.id}</tr>
											<tr>{item?.title}</tr>
											<tr>{item?.body}</tr>
										</div>
									</>
								);
							})}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
}

export default Task1;
