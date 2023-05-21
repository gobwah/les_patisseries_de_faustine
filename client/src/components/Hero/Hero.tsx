import HeroBody from "./HeroBody";
import HeroFooter from "./HeroFooter";
import HeroHeader from "./HeroHeader";

export default function Hero() {
	return (
		<div className='fixed inset-0 bg-white flex flex-col'>
			<HeroHeader />
			<HeroBody />
			<HeroFooter />
		</div>
	);
}
