// Setting to client component
"use client";

// Imports
import { useState } from "react";

// Functional Component
export default function CreatePost() {
	// Variables
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	// Functions
	const create = async () => {
		await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				description,
			}),
		});

		setTitle("");
		setDescription("");
	};

	// Rendering
	return (
		<form onSubmit={create}>
			<h3>Create Post1</h3>
			<input
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				placeholder="Title"
			/>
			<input
				onChange={(e) => setDescription(e.target.value)}
				value={description}
				placeholder="Description"
			/>
			<input type="submit" value="Create post" />
		</form>
	);
}
