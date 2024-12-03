import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";
import { siteConfig } from "@/site.config";

interface Props {
	href?: string;
	as?: "link" | "logo";
}

export function Brand({ as = "link", href }: Props) {
	if ((as === "link")) {
		return (
			<Link
				href={href ?? "/"}
				className={cn(
					"font-aurora-pro text-4xl rounded-md uppercase",
					focusRing
				)}
			>
				{siteConfig.name}
			</Link>
		);
	}

	if ((as === "logo")) {
		return (
			<div className="text-3xl font-bold uppercase rounded-md font-aurora-pro">{siteConfig.name}</div>
		);
	}
	return null;
}
