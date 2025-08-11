import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

interface Data {
	id: string;
	image: string | StaticImageData | null;
	image_alt: string;
	title: string;
	description: string;
	author: string;
	publisher: string;
}

export default function LatestResearchFormat({ data }: { data: Data }) {
	if (!data.image) {
		return (
			<div className="border-b border-gray-200 pb-6" key={data.id}>
				<h3 className="font-serif text-xl font-bold mb-2">
					<Link href="/" className="hover:text-red-600">
						{data.title}
					</Link>
				</h3>
				<p className="text-gray-700 mb-2">{data.description}</p>
				<div className="text-sm text-gray-600">
					<span className="font-medium">By {data.author}</span> • Published in{" "}
					{data.publisher}
				</div>
			</div>
		);
	}

	return (
		<div
			className="border-b border-gray-200 pb-6 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4"
			key={data.id}
		>
			<div className="relative aspect-square">
				<Image
					src={data.image}
					alt={data.image_alt}
					fill
					className="object-cover"
				/>
			</div>
			<div>
				<h3 className="font-serif text-xl font-bold mb-2">
					<Link href="/" className="hover:text-red-600">
						{data.title}
					</Link>
				</h3>
				<p className="text-gray-700 mb-2">{data.description}</p>
				<div className="text-sm text-gray-600">
					<span className="font-medium">By {data.author}</span> • Published in{" "}
					{data.publisher}
				</div>
			</div>
		</div>
	);
}
