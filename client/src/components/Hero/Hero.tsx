import HeroBody from "./HeroBody";
import HeroHeader from "./HeroHeader";

export default function Hero() {
	return (
		<div className='fixed inset-0 bg-white flex flex-col'>
			<HeroHeader />
			<HeroBody />
		</div>
	);
}
