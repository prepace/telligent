"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data for recent articles
const recentArticles = [
  {
    id: "1",
    title: "The Future of AI in Journalism",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg",
    },
    status: "Published",
    date: "2 hours ago",
  },
  {
    id: "2",
    title: "Global Climate Summit Results",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg",
    },
    status: "Published",
    date: "5 hours ago",
  },
  {
    id: "3",
    title: "New Economic Policies Announced",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
    },
    status: "Published",
    date: "1 day ago",
  },
  {
    id: "4",
    title: "The Rise of Remote Work",
    author: {
      name: "Michael Brown",
      avatar: "/placeholder.svg",
    },
    status: "Draft",
    date: "2 days ago",
  },
]

export function RecentArticles() {
  return (
    <div className="space-y-8">
      {recentArticles.map((article) => (
        <div key={article.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={article.author.avatar} alt={article.author.name} />
            <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <Link href={`/admin/articles/${article.id}`} className="text-sm font-medium leading-none hover:underline">
              {article.title}
            </Link>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{article.author.name}</span>
              <span>•</span>
              <span>{article.date}</span>
              <Badge variant={article.status === "Published" ? "default" : "secondary"} className="ml-2">
                {article.status}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

