import axios from "axios";
import { useState, useEffect } from "react";

const useTools = () => {
	const [tools, setTools] = useState([]);

	useEffect(() => {
		axios("https://supermarche-livre-02956.herokuapp.com/tools").then(
			(data) => {
				setTools(data.data);
			}
		);
	}, []);

	return [tools, setTools];
};

export default useTools;
