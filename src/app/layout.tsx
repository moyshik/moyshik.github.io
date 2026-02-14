import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
	  variable: "--font-nunito",
	  subsets: ["latin"],
	  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Welcome to My Profile ✨",
	description: "A cute and creative user profile page showcasing my work, skills, and personality",
	themeColor: "#fce7f3",
	openGraph: {
		title: "Welcome to My Profile ✨",
		description: "A cute and creative user profile page showcasing my work, skills, and personality",
		type: "website",
		url: "https://moyshik.github.io/",
		images: [
			{
				url: "https://moyshik.github.io/profile.jpg",
				alt: "My Profile Page",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Welcome to My Profile ✨",
		images: [
			{
				url: "https://moyshik.github.io/profile.jpg",
				alt: "My Profile Page",
			},
		],
		description: "A cute and creative user profile page showcasing my work, skills, and personality",
	},
};

export default function RootLayout({
	  children,
}: Readonly<{ children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body
				className={`${nunito.variable} antialiased selection:bg-pink-200 selection:text-pink-900`}
			>
				<div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-100 via-pink-50 to-white opacity-50 blur-3xl"></div>
				<div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-50 blur-3xl"></div>
				{children}
			</body>
		</html>
	);
}
