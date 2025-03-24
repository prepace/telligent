"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

// Mock article data
const MOCK_ARTICLE = {
  id: "1",
  title: "Breaking News: Tech Innovation",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
  category: "Technology",
  author: "John Doe",
  status: "Published",
  date: "2023-03-15",
  tags: "tech, innovation, news",
  featuredImage: "https://via.placeholder.com/800x400",
  excerpt: "A groundbreaking tech innovation has been announced today that could change the industry.",
}

export default function ArticleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch the article data from an API
    // For now, we'll use mock data
    setArticle(MOCK_ARTICLE)
    setLoading(false)
  }, [params.id])

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this article?")) {
      try {
        // In a real app, you would make an API call here
        console.log("Deleting article:", params.id)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Redirect to articles list
        router.push("/admin/articles")
      } catch (error) {
        console.error("Error deleting article:", error)
      }
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Article not found</h2>
        <p className="mt-2">The article you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/admin/articles"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Article Details</h1>
        <div className="flex space-x-2">
          <Link
            href={`/admin/articles/${params.id}/edit`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Edit Article
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{article.category}</span>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  article.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {article.status}
              </span>
            </div>
          </div>

          {article.featuredImage && (
            <div>
              <img
                src={article.featuredImage || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 object-cover rounded"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Author</p>
              <p>{article.author}</p>
            </div>
            <div>
              <p className="text-gray-500">Published Date</p>
              <p>{article.date}</p>
            </div>
            <div>
              <p className="text-gray-500">Tags</p>
              <p>{article.tags}</p>
            </div>
          </div>

          {article.excerpt && <div className="border-l-4 border-gray-300 pl-4 italic">{article.excerpt}</div>}

          <div>
            <h3 className="text-lg font-semibold mb-2">Content</h3>
            <div className="prose max-w-none">
              <p>{article.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Link
          href="/admin/articles"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    </div>
  )
}

