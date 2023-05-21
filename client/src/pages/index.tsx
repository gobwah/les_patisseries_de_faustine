import { client } from "@/utils/client";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";

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
