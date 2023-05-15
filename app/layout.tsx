// Imported Components
import Header from "./Header";

// Style
import "./globals.css";

// SEO
export const metadata = {
	title: "Scorpion",
	description:
		"Scorpion is a social media website that focus on sharing information about programming.",
};

// Functional Component
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ margin: 0 }}>
				<Header />
				{children}
			</body>
		</html>
	);
}
