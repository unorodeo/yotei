import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

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
					"font-aurora-pro text-4xl rounded-md",
					focusRing
				)}
			>
				YOTEI
			</Link>
		);
	}

	if ((as === "logo")) {
		return (
			<div className="text-3xl font-bold rounded-md font-aurora-pro">Yotei</div>
		);
	}
	return null;
}
