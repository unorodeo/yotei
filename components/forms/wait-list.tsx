import { Button } from "@/components/ui/button";
import { Icons } from "../ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Waitlist() {
	return (
		<form className="w-80">
			<Label
				htmlFor="waitlist"
				className="sr-only"
			>
				Email address
			</Label>
			<Input
				id="waitlist"
				name="waitlist"
				type="email"
				placeholder="you@example.com"
        variant={"secondary"}
				sizes={"lg"}
        required
        title="please fill this"
			/>

			<div className="mt-4">
				<Button type="submit" className="w-full">Join waitlist<Icons.TriangleRightIcon/></Button>
			</div>
		</form>
	);
}
