import Link from "next/link";

// Functional Component
export default async function Profile() {
	// Rendering
	return (
		<main>
			<p>Profile</p>
			<Link href="/">Go home</Link>
		</main>
	);
}
