import { redirect } from "next/navigation";

export default function Home() {
	redirect("/auth");
	return (
		<main>
			<h1 className="text-3xl font-bold underline">Hello</h1>
		</main>
	);
}
