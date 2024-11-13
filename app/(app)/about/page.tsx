import { Brand } from "@/components/ui/brand";
import { Section } from "@/components/ui/section";

export default function About() {
	return (
		<>
			<Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
				<p className="text-lg flex flex-wrap gap-2 items-center">
					Welcome to <Brand as="logo" /> your go-to tool for creating and
					managing design tokens with ease and efficiency.
				</p>
				<p className="text-lg">
					In the world of digital design and development, consistency is key.
					Design tokens serve as the foundation of that consistency, providing a
					unified language for design systems that translates seamlessly across
					teams, projects, and platforms. With Yotei, we empower designers and
					developers to generate, manage, and scale design tokens effortlessly,
					ensuring cohesive and accessible user experiences.
				</p>
			</Section>
			<Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
				<h2>What We Do</h2>
				<p className="text-lg">
					We simplify the process of creating design tokens—values like colors,
					typography, spacing, and more—by providing an intuitive platform that
					automatically generates and organizes tokens in a way that can be
					easily integrated into your design system and development workflow.
					Whether you&apos;re working with a single project or an
					enterprise-level design system, our tool is designed to scale with
					your needs.
				</p>
			</Section>
			<Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
				<h2>Why Choose Us?</h2>
				<div className="mt-6">
					<ul className="list-decimal [&>li]:pl-4 space-y-4">
						<li>
							<b>Streamlined Workflow:</b> Generate tokens quickly and
							consistently, reducing manual work and ensuring a unified approach
							across all your digital products.
						</li>
						<li>
							<b>Seamless Integration:</b> Export your design tokens in a
							variety of formats (JSON, YAML, and more) for easy integration
							with your preferred tools and platforms.
						</li>
						<li>
							<b>Collaboration-Friendly:</b> Built with teams in mind. Share,
							collaborate, and iterate on design tokens with your design and
							development teams to maintain alignment throughout the product
							lifecycle.
						</li>
						<li>
							<b>Scalability:</b> From small-scale designs to large,
							multi-platform ecosystems, our tool grows with your needs,
							supporting everything from simple token management to
							enterprise-level systems.
						</li>
						<li>
							<b>Open Source:</b> We believe in community-driven development.
							Our tool is open-source, so you can contribute, adapt, and build
							upon it as needed.
						</li>
					</ul>
				</div>
			</Section>
			<Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
				<h2>Our Mission</h2>
				<p className="text-lg">
					At the heart of our tool is a mission to make design systems more
					efficient, consistent, and scalable. We believe that great design
					starts with a strong foundation, and by simplifying the way design
					tokens are generated and managed, we&apos;re helping to create more
					cohesive, accessible, and user-centered experiences.
				</p>
			</Section>
			<Section className="py-6 max-w-3xl [&>p]:text-foreground/90">
				<h2>How It Works</h2>
				<div className="mt-6">
					<ol className="list-decimal [&>li]:pl-4 space-y-4">
						<li>
							<b>Create:</b> Easily define design values such as colors, fonts,
							spacing, and more through our user-friendly interface.
						</li>
						<li>
							<b>Organize:</b> Automatically categorize your tokens based on
							their function (e.g., typography, color palette, spacing) to keep
							everything organized and easy to reference.
						</li>
						<li>
							<b>Export:</b> Generate design tokens in formats that work for
							your development environment, so you can seamlessly integrate them
							into your project.
						</li>
						<li>
							<b>Scale:</b> As your system grows, our tool adapts, allowing you
							to easily manage large numbers of tokens across multiple
							platforms.
						</li>
					</ol>
				</div>
			</Section>
		</>
	);
}
