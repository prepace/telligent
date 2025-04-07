
export default function Resources() {
  return (
    <div className="mb-12 pb-6">
      <h2 className="font-serif text-2xl font-bold mb-6">Mental Health Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-serif text-xl font-bold mb-2">Crisis Support</h3>
          <p className="text-gray-700 mb-4">
            If you or someone you know is experiencing a mental health crisis, help is available 24/7.
          </p>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">National Suicide Prevention Lifeline:</span> 988
            </div>
            <div>
              <span className="font-medium">Crisis Text Line:</span> Text HOME to 741741
            </div>
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Find local crisis resources →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-serif text-xl font-bold mb-2">Find a Therapist</h3>
          <p className="text-gray-700 mb-4">
            Search for mental health professionals in your area who accept your insurance.
          </p>
          <div className="space-y-2 text-sm">
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Therapist directory →
              </a>
            </div>
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Teletherapy options →
              </a>
            </div>
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Insurance coverage guide →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-serif text-xl font-bold mb-2">Self-Help Tools</h3>
          <p className="text-gray-700 mb-4">Access free resources to support your mental health journey.</p>
          <div className="space-y-2 text-sm">
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Mental health screening tools →
              </a>
            </div>
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Guided meditation library →
              </a>
            </div>
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Stress management techniques →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}