"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  BarChart,
  FileText,
  FolderOpen,
  Home,
  Settings,
  Users,
  LogOut,
  Menu,
  X,
  ChevronRight,
  AlertTriangle,
} from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Articles",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderOpen,
  },
  {
    title: "Analytics",
    href: "/admin/analytics/viewers",
    icon: BarChart,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: AlertTriangle,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-2 rounded-md bg-white shadow-md"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 top-[53px] z-40 flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out
          ${isExpanded ? "w-64" : "w-16"} 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Link href="/admin" className={`flex items-center gap-2 font-bold ${!isExpanded && "hidden"}`}>
            <span className="text-xl">NewsAdmin</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100"
            aria-label={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div className="flex-1 overflow-auto py-4">
          <nav className="flex flex-col items-center md:items-stretch px-2 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-gray-100
                    ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-500"}
                    ${isExpanded ? "justify-start px-3" : "justify-center"}`}
                  onClick={() => setIsMobileOpen(false)}
                  title={!isExpanded ? item.title : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isExpanded && <span>{item.title}</span>}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="mt-auto border-t p-4">
          <button
            className={`flex items-center gap-3 rounded-lg p-2 text-gray-500 hover:bg-gray-100 w-full
              ${isExpanded ? "justify-start" : "justify-center"}`}
          >
            <LogOut className="h-5 w-5" />
            {isExpanded && <span>Log out</span>}
          </button>
        </div>
      </div>
    </>
  )
}

