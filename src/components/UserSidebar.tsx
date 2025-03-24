"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, FileText, PlusCircle, Bookmark, User, Settings, HelpCircle, LogOut, Brain, Menu } from "lucide-react"
import { usePathname } from "next/navigation"

type SidebarItem = {
  name: string
  href: string
  icon: React.ElementType
  subItems?: { name: string; href: string }[]
}

export default function UserSidebar() {
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const pathname = usePathname() // Add this line

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const sidebarItems: SidebarItem[] = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "My Articles", href: "/my-articles", icon: FileText },
    { name: "Create Article", href: "/create-article", icon: PlusCircle },
    { name: "Saved Articles", href: "/saved-articles", icon: Bookmark },
    {
      name: "Categories",
      href: "#",
      icon: Brain,
      subItems: [
        { name: "Mental Wellness", href: "/categories/mental-wellness" },
        { name: "Anxiety & Depression", href: "/categories/anxiety-depression" },
        { name: "Self Care", href: "/categories/self-care" },
        { name: "Therapy Resources", href: "/categories/therapy-resources" },
      ],
    },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help & Support", href: "/support", icon: HelpCircle },
  ]

  const toggleCategory = (name: string) => {
    if (activeCategory === name) {
      setActiveCategory(null)
    } else {
      setActiveCategory(name)
    }
  }

  return (
    <>
      {/* Sidebar Container */}
      <aside
        className={`fixed h-full top-0 right-0 bg-white shadow-lg transition-all duration-300
          ${isMobile ? (isExpanded ? "w-64" : "w-16") : "w-[300px]"}`}
      >
        {/* User Profile Section */}
        <div className={`p-4 border-b ${isMobile && !isExpanded ? "flex justify-center" : ""}`}>
          {!isMobile || isExpanded ? (
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-purple-100">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Jane Smith</h3>
                <p className="text-xs text-gray-500">Mental Health Writer</p>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-purple-100">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="absolute left-full ml-2 top-0 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Jane Smith
                <br />
                Mental Health Writer
              </div>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="py-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className={`w-full flex items-center ${isMobile && !isExpanded ? "justify-center" : "justify-between"} px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors`}
                    >
                      <div className={`flex items-center ${isMobile && !isExpanded ? "" : "space-x-3"}`}>
                        <span className="relative group">
                          <item.icon size={20} />
                          {isMobile && !isExpanded && (
                            <div className="absolute left-full ml-2 top-0 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              {item.name}
                            </div>
                          )}
                        </span>
                        {(!isMobile || isExpanded) && <span>{item.name}</span>}
                      </div>
                      {(!isMobile || isExpanded) && (
                        <svg
                          className={`w-4 h-4 transition-transform ${activeCategory === item.name ? "transform rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>

                    {/* Subcategories */}
                    {activeCategory === item.name && (!isMobile || isExpanded) && (
                      <ul className="pl-10 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block py-1 text-sm text-gray-600 hover:text-purple-700"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center ${isMobile && !isExpanded ? "justify-center" : ""} px-4 py-2 ${
                      pathname === item.href
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                    } transition-colors`}
                  >
                    <span className="relative group">
                      <item.icon size={20} />
                      {isMobile && !isExpanded && (
                        <div className="absolute left-full ml-2 top-0 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {item.name}
                        </div>
                      )}
                    </span>
                    {(!isMobile || isExpanded) && <span className="ml-3">{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}

            {/* Logout Item */}
            <li className="mt-6">
              <button
                className={`flex items-center ${isMobile && !isExpanded ? "justify-center" : ""} w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors`}
              >
                <span className="relative group">
                  <LogOut size={20} />
                  {isMobile && !isExpanded && (
                    <div className="absolute left-full ml-2 top-0 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Logout
                    </div>
                  )}
                </span>
                {(!isMobile || isExpanded) && <span className="ml-3">Logout</span>}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mental Health Resources Banner - Only visible in expanded view */}
        {(!isMobile || isExpanded) && (
          <div className="absolute bottom-4 left-4 right-4 bg-purple-100 rounded-lg p-3">
            <h4 className="text-sm font-medium text-purple-800">Need Support?</h4>
            <p className="text-xs text-purple-700 mt-1">
              Access our mental health resources or contact our support team.
            </p>
            <Link href="/resources" className="text-xs text-purple-600 font-medium mt-2 inline-block hover:underline">
              View Resources →
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}