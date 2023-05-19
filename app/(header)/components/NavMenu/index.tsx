// Imported Components
import NavItem from "../NavItem";

// Styles
import styles from "./style.module.css";

// Functional Component
export default function NavMenu() {
	// Rendering
	return (
		<div>
			<ul className={styles.nav_list}>
				<NavItem title="Home" href="/" />
				<NavItem title="Posts" href="/posts" />
				<NavItem title="Profile" href="/profile" />
			</ul>
		</div>
	);
}
