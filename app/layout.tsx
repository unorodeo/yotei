import "@/app/globals.css";

import { auroraPro, geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s | The simple token generator for design systems.",
		default: "Yotei | Generates tokens for your desgin system.",
	},
	description: "Generates tokens for your desgin system.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={cn(
					"font-geist-sans antialiased",
					geistSans.variable,
					geistMono.variable,
					auroraPro.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

