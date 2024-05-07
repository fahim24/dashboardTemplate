import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ShurikenUIProvider } from "@shuriken-ui/react";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s - SiteName ",
		default: "SiteName",
	},
	description: "Home Page",
	authors: [{ name: "Fahim" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ShurikenUIProvider>
			<html lang="en">
				<body className={inter.className}>
					<StoreProvider>{children}</StoreProvider>
				</body>
			</html>
		</ShurikenUIProvider>
	);
}
