import "./globals.css";

export const metadata = {
	title: "Scorpion",
	description:
		"Scorpion is a social media website that focus on sharing information about programming.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ margin: 0 }}>{children}</body>
		</html>
	);
}
