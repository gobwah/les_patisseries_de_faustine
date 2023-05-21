import { client } from "@/utils/client";
import Hero from "@/components/Hero/Hero";

export default function Home() {
	return (
		<main>
			<Hero />
		</main>
	);
}

export async function getStaticProps() {
	const pasteries = await client.fetch(`*[_type == "pastery"]`);

	return {
		props: {
			pasteries,
		},
	};
}
