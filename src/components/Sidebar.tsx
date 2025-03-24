
import UpcomingEvents from "@/components/UpcomingEvents"
import WellnessGuide from "@/components/WellnessGuide"
import MostReadFormat from "@/components/Formats/MostRead"
import Subscribe from "./Subscribe"

export default function Sidebar() {
  return (
    <div className="md:col-span-4">
      {/* Subscribe to Health */}
      <Subscribe />
        
      <div className="border-b border-gray-200 pb-6 mb-6">
        <h2 className="font-serif text-xl font-bold mb-4">Most Read</h2>
        <div className="space-y-4">
          {mostRead.map((data, index) => <MostReadFormat data={data} index={index} key={index}/>)}
        </div>
      </div>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <h2 className="font-serif text-xl font-bold mb-4">Wellness Guide</h2>
        <WellnessGuide />
      </div>
      <div className="border-b border-gray-200 pb-6 mb-6">
        <h2 className="font-serif text-xl font-bold mb-4">Upcoming Events</h2>
        <UpcomingEvents />
      </div>
    </div>
  )
}

const mostRead = [
  {
    description: "Five exercises proven to reduce stress and anxiety, according to science"
  },
  {
    description: "The surprising link between gut health and mental wellbeing"
  },
  {
    description: "CDC updates guidance on seasonal depression as winter approaches"
  },
  {
    description: "How to talk to your employer about mental health accommodations"
  },
  {
    description: "New therapy approach shows promise for treatment-resistant depression"
  }
]