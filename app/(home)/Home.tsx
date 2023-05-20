"use client";

import { useEffect, useState } from "react";
import database from "@/firebase/config";

// Styles
import styles from "./Home.module.css";

// Functional Component
export default async function Home() {
	useEffect(() => {
		// Exemplo de leitura de dados do Realtime Database
		console.log(database);
	}, []);

	// Rendering
	return (
		<div className={styles.home}>
			<h1 className={styles.home_title}>Posts</h1>
			<div className={styles.post_container}></div>
		</div>
	);
}
