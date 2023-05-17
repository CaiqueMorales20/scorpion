// Styles
import Image from "next/image";
import styles from "./Post.module.css";

// Image
import PostImg from "../../public/next-js.png";

// Types
import { PostProps } from "./type";

// Functional Component
export const Post = (props: PostProps) => {
	// Rendering
	return (
		<div className={styles.post}>
			<Image src={PostImg} alt="Next js" priority />
			<h2 className={styles.post_title}>{props.title}</h2>
		</div>
	);
};
