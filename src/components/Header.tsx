"use client"

import UserSidebar from "@/components/UserSidebar"
import logo from "../../public/logo.png"
import Image from "next/image"

import { Button } from "./ui/button"
import { Search, Menu, User, Bell } from "lucide-react"
import { useRouter } from "next/navigation"
import { useModal } from "../context/modal"

export default function Header() {
  const router = useRouter()
  const { setModalContent } = useModal()

  return (
    <div className="border-b border-gray-400 sticky top-0 bg-white z-1">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <span 
            className="text-xs text-gray-600 hidden md:inline cursor-pointer"
            onClick={() => router.push('/')}
          >
            Home
          </span>
          <span className="text-xs text-gray-600 hidden md:inline cursor-pointer">Sections</span>
          <span className="text-xs text-gray-600 hidden md:inline cursor-pointer">Search</span>
          <span
            className="text-xs text-gray-600 hidden md:inline cursor-pointer"
            onClick={() => router.push("/signin")}
          >
            Sign In
          </span>
        </div>

        <div>
          <Image src={logo} alt="blank" className="h-[35px] w-auto"/>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex cursor-pointer">
            Subscribe
          </Button>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex cursor-pointer" onClick={() => router.push("/admin")}>
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex cursor-pointer">
            <Bell className="h-5 w-5" />
          </Button>
          <button
            onClick={() => setModalContent(<UserSidebar />)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}