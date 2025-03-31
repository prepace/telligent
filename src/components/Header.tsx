"use client"

import UserSidebar from "@/components/UserSidebar"
import logo from "../../public/telligent.png"
import Image from "next/image"

import { Button } from "./ui/button"
import { useAuth } from "@/context/AuthProvider"
import { Search, Menu, User, Bell } from "lucide-react"
import { useRouter } from "next/navigation"
import { useModal } from "../context/modal"

export default function Header() {
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  const { setModalContent } = useModal()

  return (
    <div className="border-b border-gray-400 sticky top-0 bg-white z-1">
      <div className="mx-auto px-4 py-2 flex items-center justify-center">
        <div className="flex items-center space-x-4 w-[40vw]">
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
        </div>

        <div className="w-20vw">
          <Image src={logo} alt="blank" className="h-[22px] w-auto"/>
        </div>

        <div className="flex items-center space-x-4 w-[40vw] justify-end">
          {/* <Button variant="outline" size="sm" className="hidden md:flex cursor-pointer">
            Subscribe
          </Button> */}

          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Search className="h-5 w-5" />
          </Button>

          {isLoggedIn && <Button variant="ghost" size="icon" className="hidden md:flex cursor-pointer" onClick={() => router.push("/account")}>
            <User className="h-5 w-5" />
          </Button>}

          <Button variant="ghost" size="icon" className="hidden md:flex cursor-pointer">
            <Bell className="h-5 w-5" />
          </Button>

          {!isLoggedIn && 
          <button
            onClick={() => router.push("/login")}
            type="button"
            className="text-white hover:bg-red-600 h-[35px] w-[100px] rounded-md bg-red-500 box-border">
            Login
          </button>}

          {!isLoggedIn && 
          <button
            onClick={() => router.push("/register")}
            type="button"
            className="text-black border-1  border-black rounded-md h-[35px] w-[100px] box-border">
            Register
          </button>}

          {isLoggedIn && <button
            onClick={() => setModalContent(<UserSidebar />)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
          </button>}
        </div>
      </div>
    </div>
  )
}