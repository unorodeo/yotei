import { Section } from "@/components/ui/section";
import { Waitlist } from "@/components/forms/wait-list";

export default function Home() {
	return (
		<>
			<Section className="max-w-[85rem] py-24 space-y-8">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
						Now it&apos;s easier than ever to build{" "}
						<span className="font-medium">&ndash;&ndash;tokens</span>
					</h1>
				</div>
				<div className="max-w-3xl mx-auto text-center">
					<div className="lead">
						Build your{" "}
						<span className="bg-muted p-1 rounded-md border-2">
							&ndash;&ndash;tokens
						</span>{" "}
						for your design system with Yotei.
					</div>
				</div>
				<div className="flex justify-center pt-6">
					<Waitlist />
				</div>
			</Section>
		</>
	);
}

