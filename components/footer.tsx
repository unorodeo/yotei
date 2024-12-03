import { siteConfig } from "@/site.config";

export function Footer() {
	return (
		<footer>
			<nav className="flex flex-row items-center justify-center px-4 py-12 mx-auto max-w-7xl lg:px-8">
				<small className="small text-muted-foreground">Built by {siteConfig.author.alias}. 2024.</small>
			</nav>
		</footer>
	);
}
