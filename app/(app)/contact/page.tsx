import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

export default function Contact() {
	return (
		<>
			<Section className="lg:flex lg:flex-col lg:items-center">
				<h1>Wanna reach out to us?</h1>
				<p className="lead">Contact us by email</p>
			</Section>
			<Section>
				<Link
					href={"mailto:humanwhodreams@gmail.com"}
					className={cn(
						"text-xl sm:text-3xl md:text-5xl xl:text-[4.5rem] font-bold text-muted-foreground inline-flex rounded-lg items-center justify-center",
						focusRing
					)}
				>
					Humanwhodreams@gmail.com
					<CopyIcon className="size-5 lg:size-10 ml-4"/>
				</Link>
			</Section>
		</>
	);
}
