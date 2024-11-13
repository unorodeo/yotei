import { redirect } from "next/navigation";

export default function Yotei() {
	if (process.env.NODE_ENV === "production") {
		redirect("/");
	}
	
	return (
		<>
			<h1>Welcome to Yotei</h1>
		</>
	);
}
