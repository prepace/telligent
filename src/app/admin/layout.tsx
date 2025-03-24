"use client"

import type React from "react"

import Link from "next/link"

import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"

import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/admin" className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/articles" className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="/admin/articles/new"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Create Article
              </Link>
            </li>
            <li>
              <Link
                href="/admin/categories"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                Users
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

