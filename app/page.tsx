import { Post } from "@/components/Post/Post";

// Functional Component
export default async function Home() {
	return (
		<main>
			<h1>Home</h1>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</main>
	);
}
