
import Image from "next/image"
import Image04 from "../../public/tta4.jpg"
import Link from "next/link"

export default function WellnessGuide() {
  return (
			<div className="space-y-4">
				<div>
					<div className="relative aspect-video mb-2">
						<Image
							src={Image04}
							alt="Meditation guide"
							fill
							className="object-cover"
						/>
					</div>
					<h3 className="font-medium mb-1">
						<Link href="/" className="hover:text-red-600">
							Beginner&apos;s Guide to Meditation: Start Your Practice Today
						</Link>
					</h3>
				</div>
				<div>
					<h3 className="font-medium mb-1">
						<Link href="/" className="hover:text-red-600">
							Sleep Hygiene: 7 Tips for Better Mental Health Through Better
							Sleep
						</Link>
					</h3>
				</div>
				<div>
					<h3 className="font-medium mb-1">
						<Link href="/" className="hover:text-red-600">
							Digital Detox: How to Reduce Screen Time for Better Mental Health
						</Link>
					</h3>
				</div>
			</div>
		);
}