import Image from "next/image"
import CommentSection from "@/components/Comments/comments"
import image01 from "../../../../public/tta6.jpg"

import { Button } from "@/components/ui/button"
import { Share2, Bookmark } from "lucide-react"

export default function ArticlePage() {
  return (
			<div className="min-h-screen bg-white">
				{/* Main Content */}
				<main className="mx-auto px-6 py-8 grid grid-cols-1 xl:grid-cols-12">
					{/* Article Content */}
					<div className="lg:col-span-8">
						<div className="mb-6">
							<div className="text-sm text-gray-600 uppercase font-bold mb-2">
								Mental Health
							</div>
							<h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
								Mental Health Crisis Demands New Approach, Experts Say
							</h1>
							<div className="text-lg text-gray-700 mb-4">
								Research shows increasing rates of anxiety and depression across
								all age groups, with pandemic effects lingering
							</div>
							<div className="flex items-center text-sm text-gray-600 mb-6">
								<span className="font-medium">By Sarah Johnson</span>
								<span className="mx-2">|</span>
								<span>March 12, 2025 at 2:30 p.m. EDT</span>
							</div>
							<div className="flex space-x-3 mb-6">
								<Button variant="ghost" size="sm" className="rounded-full">
									<Share2 className="h-4 w-4 mr-2" />
									Share
								</Button>
								<Button variant="ghost" size="sm" className="rounded-full">
									<Bookmark className="h-4 w-4 mr-2" />
									Save
								</Button>
							</div>
						</div>

						<div className="relative aspect-video mb-6">
							<Image
								src={image01}
								alt="Mental health professionals in a discussion"
								fill
								className="object-cover"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
								Mental health professionals discuss new treatment approaches at
								the National Mental Health Summit in Washington. (Photo: Jane
								Smith/Health)
							</div>
						</div>

						<div className="prose prose-slate max-w-none">
							<p className="font-medium text-lg">
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
								&quot;We&apos;re seeing unprecedented levels of mental health
								challenges across all demographics,&quot; said Dr. Robert Chen,
								director of the NIMH and lead author of the report. &quot;The
								pandemic accelerated trends that were already concerning, and we
								haven&apos;t seen the numbers improve as much as we&apos;d hoped
								in the post-pandemic period.&quot;
							</p>

							<p>
								The study found that while awareness of mental health issues has
								improved, access to care remains a significant barrier for many
								Americans. Nearly 60 percent of those experiencing symptoms of
								mental illness did not receive any treatment in the past year.
							</p>

							<h2>Digital interventions show promise</h2>

							<p>
								One bright spot in the report was the effectiveness of digital
								mental health interventions, which have expanded rapidly in
								recent years. Telehealth therapy sessions, mental health apps,
								and online support groups have shown promising results,
								particularly for those with mild to moderate symptoms.
							</p>

							<p>
								&quot;Digital tools are helping us reach people who might never
								set foot in a therapist&apos;s office,&quot; said Dr. Maria
								Alvarez, a psychiatrist at Georgetown University Medical Center
								who was not involved in the study. &quot;They&apos;re not a
								replacement for in-person care in severe cases, but they&apos;re
								filling a critical gap.&quot;
							</p>

							<p>
								The Biden administration has made mental health a priority, with
								the President calling for a major expansion of mental health
								services in his State of the Union address earlier this year.
								The proposed Mental Health Access Act would allocate $5 billion
								to expand community mental health centers and integrate mental
								health services into primary care settings.
							</p>

							<div className="bg-gray-100 p-4 my-6 border-l-4 border-gray-400">
								<p className="italic">
									&quot;We need to approach mental health with the same urgency
									and resources that we devote to physical health. The costs of
									inaction are simply too high.&quot;
								</p>
								<p className="font-medium">
									— Dr. Robert Chen, Director of the National Institute of
									Mental Health
								</p>
							</div>

							<h2>Workplace mental health becomes focus</h2>

							<p>
								The report also highlighted the growing role of employers in
								addressing mental health. Companies are increasingly offering
								mental health benefits, wellness programs, and flexible work
								arrangements to support employee wellbeing.
							</p>

							<p>
								&quot;The workplace is a critical setting for mental health
								interventions,&quot; said Jennifer Torres, chief wellness
								officer at Microsoft, which has expanded its mental health
								benefits in recent years. &quot;We&apos;re seeing a return on
								investment not just in reduced healthcare costs, but in improved
								productivity and retention.&quot;
							</p>

							<p>
								However, experts caution that workplace programs alone cannot
								address the scale of the crisis. Systemic changes, including
								expanded insurance coverage for mental health services and
								increased funding for community-based programs, are needed.
							</p>

							<h2>Prevention efforts target youth</h2>

							<p>
								With rates of mental health conditions rising most sharply among
								young people, schools have become an important focus for
								prevention efforts. The report found that schools that
								implemented comprehensive mental health programs saw reductions
								in anxiety and depression symptoms among students.
							</p>

							<p>
								&quot;We need to teach mental health skills the same way we
								teach reading and math,&quot; said Dr. James Wilson, a child
								psychiatrist and consultant for the Department of Education.
								&quot;These are essential life skills that can prevent problems
								before they start.&quot;
							</p>

							<p>
								The report recommends that schools incorporate mental health
								education into their curricula and train teachers to recognize
								early signs of mental health problems. It also calls for
								increased funding for school counselors and psychologists, who
								are in short supply in many districts.
							</p>

							<p>
								As the nation grapples with this growing crisis, experts
								emphasize that solutions will require coordination across
								healthcare, education, workplace, and community settings. The
								report concludes with a call for a national strategy that
								addresses both treatment and prevention.
							</p>

							<p>
								&quot;Mental health affects every aspect of our society,&quot;
								said Chen. &quot;We need a comprehensive approach that matches
								the scale of the challenge.&quot;
							</p>
						</div>
					</div>

					{/* Sidebar */}
					<CommentSection />
				</main>
			</div>
		);
}

