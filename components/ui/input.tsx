import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { focusError, focusInput } from "@/lib/focuses";

import { cn } from "@/lib/cn";

const inputVariant = cva(
	[
		"flex w-full rounded-md border border-input text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
		focusInput,
	],
	{
		variants: {
			variant: {
				default: "bg-background hover:bg-background/80",
				secondary: "bg-secondary hover:bg-secondary/80",
			},
			sizes: {
				sm: "h-8 px-2 py-1",
				md: "h-9 px-3 py-1",
				lg: "h-10 px-4 py-2",
			},
			hasError: {
				true: focusError,
			},
		},
		defaultVariants: {
			variant: "default",
			sizes: "md",
			hasError: false,
		},
	}
);

const Input = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & VariantProps<typeof inputVariant>
>(({ className, type, variant, sizes, hasError, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(inputVariant({ variant, sizes, hasError, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };

