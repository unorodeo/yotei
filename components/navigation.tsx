import { Brand } from "./ui/brand";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

export function Navigation() {
	const isDev = process.env.NODE_ENV === "development";
	return (
		<header className="sticky inset-x-0 top-0 z-50 bg-background/60 backdrop-blur-md border-b">
			<nav className="flex flex-row items-center justify-between px-4 mx-auto max-w-7xl h-14 lg:px-8">
				<Brand />
				<div className="hidden lg:flex lg:items-center lg:gap-2">
					<Link
						href={"/about"}
						className={buttonVariants({
							variant: "peak",
							size: "sm",
							className: "text-base",
						})}
					>
						About
					</Link>
					<Link
						href={"/contact"}
						className={buttonVariants({
							variant: "peak",
							size: "sm",
							className: "text-base",
						})}
					>
						Contact
					</Link>
					{isDev ? (
						<Link
							href={"/studio"}
							className={buttonVariants({
								size: "sm",
								className: "text-base",
							})}
						>
							Studio
						</Link>
					) : null}
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
