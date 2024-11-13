import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navigation />
			{children}
			<Footer />
		</>
	);
}
