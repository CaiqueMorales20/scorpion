// Turning into client component
"use client";

// Imports
import { useEffect, useState } from "react";
import { fetchData } from "@/firebase/getData";
import { Post } from "@/components/Post/Post";

// Functional Component
export default function Posts() {
	// Varibales
	const [data, setData] = useState<any[]>([]);

	// Functions
	useEffect(() => {
		async function fetchDataAsync() {
			let result: any = await fetchData();
			setData(result);
		}

		fetchDataAsync();
	}, []);

	// Rendering
	return (
		<>
			{data.map((item, index) => {
				return <Post title={item.title} id={item.id} key={index} />;
			})}
		</>
	);
}
