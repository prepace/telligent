import Link from "next/link"
import { Phone, ExternalLink, BookOpen, Heart, MessageSquare, Clock } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Crisis Resources Section */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Phone className="text-red-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-black">Crisis Resources</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">National Suicide Prevention Lifeline</h3>
                <p className="text-black mb-3">24/7, free and confidential support for people in distress.</p>
                <p className="text-red-600 font-bold text-xl mb-1">988</p>
                <Link
                  href="https://988lifeline.org/"
                  className="inline-flex items-center text-red-600 hover:text-red-700"
                >
                  Visit website <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">Crisis Text Line</h3>
                <p className="text-black mb-3">Text HOME to 741741 to connect with a Crisis Counselor.</p>
                <p className="text-red-600 font-bold text-xl mb-1">Text HOME to 741741</p>
                <Link
                  href="https://www.crisistextline.org/"
                  className="inline-flex items-center text-red-600 hover:text-red-700"
                >
                  Visit website <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Finding Help Section */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <MessageSquare className="text-red-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-black">Finding Help</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">Therapy Options</h3>
                <p className="text-black mb-3">Find licensed therapists, psychologists, and counselors.</p>
                <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                  Find a therapist <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">Support Groups</h3>
                <p className="text-black mb-3">Connect with others who understand what you're going through.</p>
                <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                  Find support groups <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">Online Therapy</h3>
                <p className="text-black mb-3">Access therapy from the comfort of your home.</p>
                <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                  Explore online options <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <BookOpen className="text-red-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-black">Educational Resources</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">Understanding Mental Health</h3>
                <p className="text-black mb-3">
                  Learn about common mental health conditions, symptoms, and treatments.
                </p>
                <ul className="space-y-2 mb-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-red-600 mr-2">•</div>
                    <span className="text-black">Depression and Anxiety</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-red-600 mr-2">•</div>
                    <span className="text-black">PTSD and Trauma</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-red-600 mr-2">•</div>
                    <span className="text-black">Bipolar Disorder</span>
                  </li>
                </ul>
                <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                  Read more <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-black mb-2">Self-Help Resources</h3>
                <p className="text-black mb-3">Tools and techniques to support your mental wellbeing.</p>
                <ul className="space-y-2 mb-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-red-600 mr-2">•</div>
                    <span className="text-black">Mindfulness and Meditation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-red-600 mr-2">•</div>
                    <span className="text-black">Stress Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-red-600 mr-2">•</div>
                    <span className="text-black">Building Healthy Habits</span>
                  </li>
                </ul>
                <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                  Explore techniques <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Care Section */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Heart className="text-red-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-black">Self-Care Practices</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              {["Physical", "Emotional", "Social"].map((category) => (
                <div key={category} className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg text-black mb-2">{category} Self-Care</h3>
                  <p className="text-black mb-3">
                    {category === "Physical" && "Exercise, sleep, and nutrition to support your mental health."}
                    {category === "Emotional" && "Practices to process and express your emotions in healthy ways."}
                    {category === "Social" && "Building and maintaining supportive relationships."}
                  </p>
                  <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                    Learn more <ExternalLink size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Resources Section */}
        <section>
          <div className="flex items-center mb-4">
            <Clock className="text-red-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-black">Local Resources</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-black mb-4">
              Finding support in your local community can be an important part of your mental health journey.
            </p>
            <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-black mb-3">Find Resources Near You</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}