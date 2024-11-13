import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

const badgeVariants = cva(
	[
		"inline-flex items-center rounded-md border transition-colors",
		focusRing,
	],
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "text-foreground",
			},
			sizes: {
				sm: "px-2.5 py-1 text-xs font-semibold",
				md: "px-3 py-1.5 text-sm font-medium",
				lg: "px-4 py-2 text-sm font-medium",
			},
		},
		defaultVariants: {
			variant: "default",
			sizes: "sm",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, sizes, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, sizes }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };

