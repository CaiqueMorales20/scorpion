// Imported Components
import Link from "next/link";

// Styles
import styles from "./style.module.css";

// Types
import { NavItemProps } from "./type";

// Functional Component
export default function NavItem(props: NavItemProps) {
	return (
		<li className={styles.nav_item}>
			<Link href={props.href} className={styles.nav_link}>
				{props.title}
			</Link>
		</li>
	);
}
