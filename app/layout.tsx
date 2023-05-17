// Imported Components
import Header from "./(header)/Header";

// Style
import "./globals.css";

// Fonts
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en" style={{ fontFamily: inter.style.fontFamily }}>
			<body style={{ margin: 0 }}>
				<Header />
				<main className="page_container">{children}</main>
			</body>
		</html>
	);
}
