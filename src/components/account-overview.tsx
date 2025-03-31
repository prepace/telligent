"use client"

import { useAuth } from "@/context/AuthProvider"
import { formatDate } from "@/utils/formatting"

export function AccountOverview() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-6">
        <h2 className="text-lg font-medium mb-4">Account Information</h2>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-gray-500">Name:</p>
            <p className="text-sm">{user.first_name} {user.last_name}</p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-gray-500">Email:</p>
            <p className="text-sm">{user.email}</p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-gray-500">Member since:</p>
            <p className="text-sm">{formatDate(user.created_at)}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">
            Edit Profile
          </button>
          <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
            Change Password
          </button>
        </div>
      </div>
      
    </div>
  )
}

