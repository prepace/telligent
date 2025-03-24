
import Image from "next/image"
import Image04 from "../../public/image04.jpeg"

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
          <a href="#" className="hover:text-blue-800">
            Beginner's Guide to Meditation: Start Your Practice Today
          </a>
        </h3>
      </div>
      <div>
        <h3 className="font-medium mb-1">
          <a href="#" className="hover:text-blue-800">
            Sleep Hygiene: 7 Tips for Better Mental Health Through Better Sleep
          </a>
        </h3>
      </div>
      <div>
        <h3 className="font-medium mb-1">
          <a href="#" className="hover:text-blue-800">
            Digital Detox: How to Reduce Screen Time for Better Mental Health
          </a>
        </h3>
      </div>
    </div>
  )
}