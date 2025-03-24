import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Menu, User, Bell, Share2, Bookmark } from "lucide-react"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Article Content */}
        <div className="lg:col-span-8">
          <div className="mb-6">
            <div className="text-sm text-gray-600 uppercase font-bold mb-2">Mental Health</div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
              Mental Health Crisis Demands New Approach, Experts Say
            </h1>
            <div className="text-lg text-gray-700 mb-4">
              Research shows increasing rates of anxiety and depression across all age groups, with pandemic effects
              lingering
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
              src="/placeholder.svg?height=600&width=1200"
              alt="Mental health professionals in a discussion"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              Mental health professionals discuss new treatment approaches at the National Mental Health Summit in
              Washington. (Photo: Jane Smith/Health)
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="font-medium text-lg">
              A growing mental health crisis is forcing experts to rethink traditional approaches to treatment and
              prevention, according to a comprehensive report released Tuesday by the National Institute of Mental
              Health.
            </p>

            <p>
              The report, which analyzed data from more than 200,000 Americans, found that rates of anxiety and
              depression have increased by 25 percent since 2019, with particularly sharp rises among adolescents and
              young adults.
            </p>

            <p>
              "We're seeing unprecedented levels of mental health challenges across all demographics," said Dr. Robert
              Chen, director of the NIMH and lead author of the report. "The pandemic accelerated trends that were
              already concerning, and we haven't seen the numbers improve as much as we'd hoped in the post-pandemic
              period."
            </p>

            <p>
              The study found that while awareness of mental health issues has improved, access to care remains a
              significant barrier for many Americans. Nearly 60 percent of those experiencing symptoms of mental illness
              did not receive any treatment in the past year.
            </p>

            <h2>Digital interventions show promise</h2>

            <p>
              One bright spot in the report was the effectiveness of digital mental health interventions, which have
              expanded rapidly in recent years. Telehealth therapy sessions, mental health apps, and online support
              groups have shown promising results, particularly for those with mild to moderate symptoms.
            </p>

            <p>
              "Digital tools are helping us reach people who might never set foot in a therapist's office," said Dr.
              Maria Alvarez, a psychiatrist at Georgetown University Medical Center who was not involved in the study.
              "They're not a replacement for in-person care in severe cases, but they're filling a critical gap."
            </p>

            <p>
              The Biden administration has made mental health a priority, with the President calling for a major
              expansion of mental health services in his State of the Union address earlier this year. The proposed
              Mental Health Access Act would allocate $5 billion to expand community mental health centers and integrate
              mental health services into primary care settings.
            </p>

            <div className="bg-gray-100 p-4 my-6 border-l-4 border-gray-400">
              <p className="italic">
                "We need to approach mental health with the same urgency and resources that we devote to physical
                health. The costs of inaction are simply too high."
              </p>
              <p className="font-medium">— Dr. Robert Chen, Director of the National Institute of Mental Health</p>
            </div>

            <h2>Workplace mental health becomes focus</h2>

            <p>
              The report also highlighted the growing role of employers in addressing mental health. Companies are
              increasingly offering mental health benefits, wellness programs, and flexible work arrangements to support
              employee wellbeing.
            </p>

            <p>
              "The workplace is a critical setting for mental health interventions," said Jennifer Torres, chief
              wellness officer at Microsoft, which has expanded its mental health benefits in recent years. "We're
              seeing a return on investment not just in reduced healthcare costs, but in improved productivity and
              retention."
            </p>

            <p>
              However, experts caution that workplace programs alone cannot address the scale of the crisis. Systemic
              changes, including expanded insurance coverage for mental health services and increased funding for
              community-based programs, are needed.
            </p>

            <h2>Prevention efforts target youth</h2>

            <p>
              With rates of mental health conditions rising most sharply among young people, schools have become an
              important focus for prevention efforts. The report found that schools that implemented comprehensive
              mental health programs saw reductions in anxiety and depression symptoms among students.
            </p>

            <p>
              "We need to teach mental health skills the same way we teach reading and math," said Dr. James Wilson, a
              child psychiatrist and consultant for the Department of Education. "These are essential life skills that
              can prevent problems before they start."
            </p>

            <p>
              The report recommends that schools incorporate mental health education into their curricula and train
              teachers to recognize early signs of mental health problems. It also calls for increased funding for
              school counselors and psychologists, who are in short supply in many districts.
            </p>

            <p>
              As the nation grapples with this growing crisis, experts emphasize that solutions will require
              coordination across healthcare, education, workplace, and community settings. The report concludes with a
              call for a national strategy that addresses both treatment and prevention.
            </p>

            <p>
              "Mental health affects every aspect of our society," said Chen. "We need a comprehensive approach that
              matches the scale of the challenge."
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="font-serif text-xl font-bold mb-4">More on Mental Health</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">
                  <a href="#" className="hover:text-blue-800">
                    Congress debates mental health funding bill amid rising concerns
                  </a>
                </h3>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  <a href="#" className="hover:text-blue-800">
                    New study links social media use to increased anxiety in teens
                  </a>
                </h3>
                <p className="text-sm text-gray-600">5 hours ago</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  <a href="#" className="hover:text-blue-800">
                    Opinion: Why we need to rethink how we talk about mental illness
                  </a>
                </h3>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="font-serif text-xl font-bold mb-4">Most Read Health</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-xl font-bold text-gray-400 mr-3">1</div>
                <h3 className="font-medium">
                  <a href="#" className="hover:text-blue-800">
                    CDC updates guidance on seasonal depression as winter approaches
                  </a>
                </h3>
              </div>
              <div className="flex items-start">
                <div className="text-xl font-bold text-gray-400 mr-3">2</div>
                <h3 className="font-medium">
                  <a href="#" className="hover:text-blue-800">
                    Five exercises proven to reduce stress and anxiety, according to science
                  </a>
                </h3>
              </div>
              <div className="flex items-start">
                <div className="text-xl font-bold text-gray-400 mr-3">3</div>
                <h3 className="font-medium">
                  <a href="#" className="hover:text-blue-800">
                    The surprising link between gut health and mental wellbeing
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 mb-6">
            <h2 className="font-serif text-xl font-bold mb-2">Subscribe to Health</h2>
            <p className="text-sm mb-4">
              Get the latest mental health news and research delivered to your inbox every week.
            </p>
            <div className="space-y-3">
              <Input placeholder="Email address" />
              <Button className="w-full">Sign up</Button>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              By signing up you agree to our{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h3 className="font-bold mb-3">About Health</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Editorial Standards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Expert Board
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Contact the Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Advertise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Content Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Corrections
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Get Health</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Subscription
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gift Subscriptions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Mobile & Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsletters & Alerts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Health Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Video Series
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Health Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-6 text-sm text-gray-600">
            <div className="flex flex-wrap justify-between mb-4">
              <div className="space-x-4 mb-4 md:mb-0">
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Cookie Settings
                </a>
                <a href="#" className="hover:underline">
                  Ad Choices
                </a>
              </div>
              <div>© 2025 Health</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

