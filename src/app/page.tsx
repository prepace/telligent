import Image from "next/image";

import Resources from "@/components/Resources";
import Sidebar from "@/components/Sidebar";

import LatestResearchFormat from "@/components/Formats/LatestResearch";
import LatestStoriesFormat from "@/components/Formats/LatestStories";

import Image01 from "../../public/image01.jpeg";
import Image02 from "../../public/image02.jpeg";
import Image03 from "../../public/image03.jpeg";
// import Image04 from "../../public/image04.jpeg"
import Image05 from "../../public/Image05.jpg";
import Image06 from "../../public/Image06.jpeg";

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

export default function HealthHomepage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				{/* Featured Story */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 pb-12 border-b border-gray-200">
					<div className="lg:col-span-7">
						<div className="text-sm text-gray-600 uppercase font-bold mb-2">
							Featured
						</div>
						<h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
							<a
								href="/articles/mental-health-crisis"
								className="hover:text-red-600"
							>
								Mental Health Crisis Demands New Approach, Experts Say
							</a>
						</h1>
						<div className="text-lg text-gray-700 mb-4">
							Research shows increasing rates of anxiety and depression across
							all age groups, with pandemic effects lingering
						</div>
						<div className="flex items-center text-sm text-gray-600 mb-6">
							<span className="font-medium">By Sarah Johnson</span>
							<span className="mx-2">|</span>
							<span>March 12, 2025</span>
						</div>
						<div className="prose prose-slate max-w-none">
							<p>
								A growing mental health crisis is forcing experts to rethink
								traditional approaches to treatment and prevention, according to
								a comprehensive report released Tuesday by the National
								Institute of Mental Health.
							</p>
							<p>
								The report, which analyzed data from more than 200,000
								Americans, found that rates of anxiety and depression have
								increased by 25 percent since 2019, with particularly sharp
								rises among adolescents and young adults.
							</p>
							<p>
								<a
									href="/articles/mental-health-crisis"
									className="text-red-600 font-medium hover:underline"
								>
									Continue reading →
								</a>
							</p>
						</div>
					</div>
					<div className="lg:col-span-5">
						<div className="relative aspect-[4/3] mb-4">
							<Image
								src={Image03}
								alt="Mental health professionals in a discussion"
								fill
								className="object-cover"
							/>
						</div>
						<div className="text-sm text-gray-600">
							Mental health professionals discuss new treatment approaches at
							the National Mental Health Summit in Washington. (Photo: Jane
							Smith/Health)
						</div>
					</div>
				</div>

				{/* Latest Stories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
					<div className="md:col-span-8">
						<h2 className="font-serif text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
							Latest Stories
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							{latestStories.map((data) => (
								<LatestStoriesFormat data={data} key={data.id} />
							))}
						</div>

						{/* Opinion Section */}
						<div className="mb-8">
							<h2 className="font-serif text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
								Perspectives
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Opinion 1 */}
								<div className="border-b border-gray-200 pb-6">
									<h3 className="font-serif text-xl font-bold mb-2">
										<a
											href="/articles/mental-health-crisis"
											className="hover:text-red-600"
										>
											Opinion: Why We Need to Rethink How We Talk About Mental
											Illness
										</a>
									</h3>
									<p className="text-gray-700 mb-2">
										Language matters in reducing stigma and encouraging people
										to seek help
									</p>
									<div className="text-sm text-gray-600">
										<span className="font-medium">By Dr. Emily Rodriguez</span>{" "}
										• Clinical Psychologist
									</div>
								</div>

								{/* Opinion 2 */}
								<div className="border-b border-gray-200 pb-6">
									<h3 className="font-serif text-xl font-bold mb-2">
										<a
											href="/articles/mental-health-crisis"
											className="hover:text-red-600"
										>
											Opinion: The Case for Mental Health Days at Work and
											School
										</a>
									</h3>
									<p className="text-gray-700 mb-2">
										Normalizing preventative mental health care could reduce
										long-term disability and costs
									</p>
									<div className="text-sm text-gray-600">
										<span className="font-medium">By Thomas Wright</span> •
										Workplace Wellness Expert
									</div>
								</div>
							</div>
						</div>

						{/* Research Section */}
						<div>
							<h2 className="font-serif text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
								Latest Research
							</h2>

							<div className="grid grid-cols-1 gap-6">
								{latestResearch.map((data) => (
									<LatestResearchFormat data={data} key={data.id} />
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<Sidebar />
				</div>

				{/* Resources Section */}
				<Resources />
			</main>
		</div>
	);
}

const latestResearch = [
	{
		id: "425",
		image: Image05,
		image_alt: "Brain scan research",
		title: "New Study Links Gut Microbiome to Depression and Anxiety",
		description:
			"Researchers find strong correlation between gut bacteria composition and mental health outcomes, suggesting new treatment avenues",
		author: "Dr. Sarah Peterson",
		publisher: "Journal of Psychiatric Research",
	},
	{
		id: "435",
		image: Image06,
		image_alt: "Exercise research",
		title:
			"Exercise as Effective as Medication for Mild Depression, Study Finds",
		description:
			"Large-scale clinical trial shows regular physical activity can match antidepressants for symptom reduction in some patients",
		author: "Dr. Mark Johnson",
		publisher: "JAMA Psychiatry",
	},
];

const latestStories = [
	{
		id: "345",
		image: Image01,
		image_alt: "Digital mental health tools",
		title: "Digital Interventions Show Promise in Treating Anxiety",
		description:
			"New research finds that mental health apps can be as effective as in-person therapy for mild to moderate cases",
		author: "Michael Chen",
		date: "5 hours ago",
	},
	{
		id: "435",
		image: Image02,
		image_alt: "Workplace mental health",
		title: "Companies Expand Mental Health Benefits Amid Rising Demand",
		description:
			"Major employers are investing in employee wellness programs and seeing returns in productivity and retention",
		author: "Jennifer Torres",
		date: "8 hours ago",
	},
	{
		id: "435",
		image: null,
		image_alt: null,
		title: "Schools Implement Mental Health Curriculum Nationwide",
		description:
			"New program teaches students coping skills and emotional regulation as part of standard education",
		author: "James Wilson",
		date: "Yesterday",
	},
	{
		id: "425",
		image: null,
		image_alt: null,
		title: "Congress Debates Mental Health Funding Bill Amid Rising Concerns",
		description:
			"Bipartisan support grows for expanded access to mental health services as national crisis deepens",
		author: "Robert Martinez",
		date: "Yesterday",
	},
];
