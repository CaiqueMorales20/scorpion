// Fetch
async function getNote(noteId: string) {
	const res = await fetch(
		`http://127.0.0.1:8090/api/collections/posts/records/${noteId}`,
		{
			next: { revalidate: 10 },
		}
	);
	const data = await res.json();
	return data;
}

// Functional Component
export default async function PostPage({ params }: any) {
	// Variables
	const post = await getNote(params.id);

	// Rendering
	return (
		<div>
			<h1>Post atual: {post.id}</h1>
			<h3>Titulo: {post.title}</h3>
		</div>
	);
}
