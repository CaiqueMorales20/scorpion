// Imports
import PocketBase from "pocketbase";

// Imported Components
import { Post } from "@/components/Post/Post";

// Styles
import styles from "./Home.module.css";
import CreatePost from "../posts/[id]/CreatePost";

// Functions
async function getPosts() {
	const db = new PocketBase("http://127.0.0.1:8090");
	const records = await db.collection("posts").getFullList({
		sort: "-created",
	});
	return records as any[];
}

// Functional Component
export default async function Home() {
	const posts = await getPosts();

	// Rendering
	return (
		<div className={styles.home}>
			<h1 className={styles.home_title}>Posts</h1>
			<div className={styles.post_container}>
				{posts.map((item, index) => {
					return <Post title={item.title} id={item.id} />;
				})}
			</div>
			<CreatePost />
		</div>
	);
}
