
export default function Footer() {
  return (
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
  )
}