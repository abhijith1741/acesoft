import axios from "axios";

export const apiFetch = (setResult, setLoading, setError) => {
	const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url, {}, {}).then((res) => {
        console.log(res)
        setResult(res.data);
        setLoading(false)
    }).catch((err) => {
        console.error(err)
        setError("API Occur Some Error")
    })
	
};
