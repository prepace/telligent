"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ArrowUpRight, Users, FileText, FolderOpen, AlertTriangle } from "lucide-react"

// Mock data for viewer statistics
const viewerData = [
  { name: "Mon", viewers: 2400 },
  { name: "Tue", viewers: 1398 },
  { name: "Wed", viewers: 9800 },
  { name: "Thu", viewers: 3908 },
  { name: "Fri", viewers: 4800 },
  { name: "Sat", viewers: 3800 },
  { name: "Sun", viewers: 4300 },
]

// Mock data for reported articles
const reportedArticles = [
  {
    id: "r1",
    title: "Controversial Political Opinion Piece",
    author: "Jane Smith",
    reportCount: 24,
    reportReasons: ["Misinformation", "Offensive content"],
    date: "2023-10-15",
  },
  {
    id: "r2",
    title: "Celebrity Scandal Exposé",
    author: "Robert Johnson",
    reportCount: 18,
    reportReasons: ["Privacy violation", "Unverified claims"],
    date: "2023-10-16",
  },
  {
    id: "r3",
    title: "Medical Advice: Alternative Treatments",
    author: "Dr. Michael Brown",
    reportCount: 32,
    reportReasons: ["Harmful advice", "Misinformation"],
    date: "2023-10-14",
  },
]

export default function AdminDashboard() {
  // Calculate total statistics
  const totalReportedArticles = reportedArticles.length

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="flex gap-2">
          <Link
            href="/admin/analytics/viewers"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Viewer Analytics
          </Link>
          <Link
            href="/admin/analytics/users"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            User Analytics
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            <div className="mt-4">
              <Link href="/admin/articles" className="text-blue-600 hover:underline text-sm">
                View all articles
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 new categories</p>
            <div className="mt-4">
              <Link href="/admin/categories" className="text-blue-600 hover:underline text-sm">
                Manage categories
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+12 new users this week</p>
            <div className="mt-4">
              <Link href="/admin/users" className="text-blue-600 hover:underline text-sm">
                Manage users
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reported Articles</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalReportedArticles}</div>
            <p className="text-xs text-muted-foreground">+5 new reports today</p>
            <div className="mt-4">
              <Link href="/admin/reports" className="text-blue-600 hover:underline text-sm">
                View reported content
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Viewer Stats */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Viewer Overview</CardTitle>
              <CardDescription>Daily viewer traffic for the past week</CardDescription>
            </div>
            <Link href="/admin/analytics/viewers" className="flex items-center text-sm text-blue-600 hover:underline">
              Detailed Analytics
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={viewerData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="viewers" fill="#3b82f6" name="Viewers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reported Articles */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Recent Reported Articles</CardTitle>
              <CardDescription>Articles flagged by users for review</CardDescription>
            </div>
            <Link href="/admin/reports" className="flex items-center text-sm text-blue-600 hover:underline">
              View All Reports
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reports
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportedArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{article.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{article.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {article.reportCount}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{article.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/reports?id=${article.id}`} className="text-blue-600 hover:text-blue-900">
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">2 hours ago</p>
              <p>Article "Breaking News: Tech Innovation" was published</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">5 hours ago</p>
              <p>Article "Sports Update: Championship Results" was updated</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">Yesterday</p>
              <p>New category "Technology" was created</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">2 days ago</p>
              <p>User "john.doe" was added as an editor</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


