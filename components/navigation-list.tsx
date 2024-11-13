"use client";

import { Button, buttonVariants } from "./ui/button";
import {
	FileKeyIcon,
	LucideIcon,
	NewspaperIcon,
	PaletteIcon,
	RulerIcon,
	ScaleIcon,
	TypeIcon,
} from "lucide-react";

import { Icons } from "./ui/icons";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useHover } from "@/hooks/use-hover";
import { useRef } from "react";

export function NavigationList() {
	const toolsRef = useRef<HTMLDivElement | null>(null);
	const isHovering = useHover(toolsRef);

	return (
		<>
			<div
				ref={toolsRef}
				className="relative"
			>
				<Button
					type="button"
					variant={isHovering ? "secondary" : "peak"}
					size={"sm"}
					className="text-base"
				>
					Resources
					<Icons.TriangleRightIcon
						className={cn({ "transition-transform rotate-90": isHovering })}
					/>
				</Button>
				{isHovering ? <div className="absolute z-50 w-full h-10"></div> : null}
				{isHovering ? (
					<div
						className={cn(
							"absolute mt-2 z-50 w-56 rounded-sm border bg-popover p-1 text-popover-foreground shadow-md dark:shadow-md dark:shadow-surface outline-none origin-top",
							{
								"animate-in duration-150": isHovering,
								"animate-out duration-150": !isHovering,
							}
						)}
					>
						<ul className="relative grid w-full gap-4">
							<div className="w-full col-span-1 space-y-2">
								<div className="px-3 font-light muted text-foreground">
									Tools
								</div>
								<LinkItem
									href="#"
									label="Colors"
									Icon={PaletteIcon}
								/>
								<LinkItem
									href="#"
									label="Type scale"
									Icon={TypeIcon}
								/>
								<LinkItem
									href="#"
									label="Spacing"
									Icon={RulerIcon}
								/>
							</div>
							<div className="w-full col-span-1 space-y-2">
								<div className="px-3 font-light muted text-foreground">
									Company
								</div>
								<LinkItem
									href="#"
									label="Blog"
									Icon={NewspaperIcon}
								/>
								<LinkItem
									href="#"
									label="Privacy"
									Icon={FileKeyIcon}
								/>
								<LinkItem
									href="#"
									label="Terms"
									Icon={ScaleIcon}
								/>
							</div>
						</ul>
					</div>
				) : null}
			</div>
		</>
	);
}

function LinkItem({
	Icon,
	href,
	label,
}: {
	href: string;
	Icon: LucideIcon;
	label: string;
}) {
	return (
		<li>
			<Link
				href={href ?? "#"}
				className={cn(
					buttonVariants({
						variant: "peak",
						size: "sm",
						className: "justify-start w-full rounded group",
					})
				)}
			>
				<Icon className="text-muted-foreground size-4" />
				{label}
				<Icons.TriangleRightIcon className="ml-auto opacity-0 group-hover:opacity-100 text-muted-foreground" />
			</Link>
		</li>
	);
}
