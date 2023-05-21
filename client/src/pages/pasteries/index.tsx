import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/client";

const Pasteries = ({ pasteries }: any) => {
	return (
		<main className='flex flex-col gap-7 w-full align-middle justify-center p-5'>
			{pasteries.map((pastery: any) => (
				<section key={pastery._id}>
					<h2>{pastery.name}</h2>
					<div>
						{pastery.types.map((type: string) => (
							<p key={`pastery_type_${type.replace(" ", "-")}`}>{type}</p>
						))}
					</div>
					<div>
						<Image
							src={urlFor(pastery.image).url()}
							alt={pastery.name}
							width={50}
							height={50}
						/>
					</div>
					<p>{pastery.description}</p>
					<p>
						{pastery.price} € --- {pastery.portions} parts
					</p>
				</section>
			))}
		</main>
	);
};

export default Pasteries;
