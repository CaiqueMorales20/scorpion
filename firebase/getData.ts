import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function fetchData() {
	let posts = [] as any[];

	const classesCollection = await getDocs(collection(db, "posts"));
	classesCollection.forEach((doc) => {
		posts.push(doc.data());
	});
	return posts;
}
