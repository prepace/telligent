import Image from "next/image"
import Link from "next/link"

interface Data {
  id: string
  image: string | null
  image_alt: string | null
  title: string
  description: string
  author: string
  date: string
}

export default function LatestStoriesFormat({ data }: { data: Data }) {

  if (!data.image) {
    return (
      <div className="border-b border-gray-200 pb-6">
        <h3 className="font-serif text-xl font-bold mb-2">
          <Link href="/" className="hover:text-red-600">
            {data.title}
          </Link>
        </h3>
        <p className="text-gray-700 mb-2">
          {data.description}
        </p>
        <div className="text-sm text-gray-600">
          <span className="font-medium">By {data.author}</span> • {data.date}
        </div>
      </div>
    )
  }

  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="relative aspect-video mb-3">
        <Image
          src={data.image}
          alt={data.image_alt || ''}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-serif text-xl font-bold mb-2">
        <Link href={`/articles/${data.id}`} className="hover:text-red-600">
          {data.title}
        </Link>
      </h3>
      <p className="text-gray-700 mb-2">
        {data.description}
      </p>
      <div className="text-sm text-gray-600">
        <span className="font-medium">By {data.author}</span> • {data.date}
      </div>
    </div>
  )
}