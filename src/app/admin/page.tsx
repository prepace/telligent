import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Articles</h2>
          <p className="text-3xl font-bold">124</p>
          <div className="mt-4">
            <Link href="/admin/articles" className="text-blue-600 hover:underline">
              View all articles
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <p className="text-3xl font-bold">12</p>
          <div className="mt-4">
            <Link href="/admin/categories" className="text-blue-600 hover:underline">
              Manage categories
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Users</h2>
          <p className="text-3xl font-bold">48</p>
          <div className="mt-4">
            <Link href="/admin/users" className="text-blue-600 hover:underline">
              Manage users
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
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
      </div>
    </div>
  )
}

