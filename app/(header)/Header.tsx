// Imported Components
import NavMenu from "./components/NavMenu";
import Link from "next/link";

// Styles
import styles from "./Header.module.css";

/// Functional Component
export default function Header() {
	// Rendering
	return (
		<div className={styles.header}>
			<div className={styles.nav}>
				<Link href="/" className={styles.logo}>
					Scorpion
				</Link>
				<NavMenu />
			</div>
		</div>
	);
}
