// Styles
import styles from "./Home.module.css";

// Functional Component
export default async function Home() {
	// Rendering
	return (
		<div className={styles.home}>
			<h1 className={styles.home_title}>Posts</h1>
			<div className={styles.post_container}></div>
		</div>
	);
}
