import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import logo from "../../../public/logo.png"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-teal-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <h1 className="ml-3 text-xl font-semibold text-gray-800">MindfulNews</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block p-2 bg-teal-100 rounded-full">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Coming Soon</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We're building a new platform dedicated to mental health news, resources, and stories that matter.
            </p>

            <div className="max-w-md mx-auto mb-12">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Notify Me
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">We'll notify you when we launch. No spam, we promise.</p>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-teal-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-teal-600 font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Reliable Information</h4>
                <p className="text-gray-600">
                  Providing evidence-based mental health news and resources you can trust.
                </p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-teal-600 font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Diverse Perspectives</h4>
                <p className="text-gray-600">Sharing stories from diverse voices and experiences in mental health.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-teal-600 font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Reducing Stigma</h4>
                <p className="text-gray-600">Breaking down barriers and misconceptions around mental health issues.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="News articles" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">In-depth Articles</h4>
                    <p className="text-white/80">Thoughtful coverage of mental health topics and breakthroughs</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Expert interviews"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Expert Insights</h4>
                    <p className="text-white/80">Interviews and perspectives from mental health professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 font-medium rounded-full text-sm mb-4">
                Beta Access
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Limited Articles Available Now</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get early access to these featured articles in our beta version. More content will be available at our
                full launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Mindfulness+Techniques"
                    alt="Mindfulness Techniques"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2">5 Mindfulness Techniques for Daily Anxiety</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Simple practices you can incorporate into your routine to manage anxiety and improve mental
                    wellbeing.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 15, 2023</span>
                    <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center">
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Workplace+Mental+Health"
                    alt="Workplace Mental Health"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2">Creating a Mental Health-Friendly Workplace</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    How employers can foster environments that support employee mental health and wellbeing.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 22, 2023</span>
                    <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center">
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Sleep+and+Mental+Health"
                    alt="Sleep and Mental Health"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2">The Connection Between Sleep and Mental Health</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Research findings on how quality sleep impacts your mental wellbeing and tips for better rest.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">July 3, 2023</span>
                    <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center">
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="#"
                className="inline-flex items-center px-5 py-2.5 border-2 border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors"
              >
                Request Beta Access
              </Link>
              <p className="mt-3 text-sm text-gray-500">Limited spots available for our beta testing program.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-teal-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">Have questions or want to collaborate? We'd love to hear from you.</p>
            <Link
              href="mailto:contact@mindfullnews.com"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MH</span>
                </div>
                <h2 className="ml-3 text-xl font-semibold">MindfulNews</h2>
              </div>
              <p className="mt-2 text-gray-400 max-w-md">
                A new platform dedicated to mental health news and resources.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} MindfulNews. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

