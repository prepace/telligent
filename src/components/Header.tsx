"use client"

import UserSidebar from "@/components/UserSidebar"
import logo from "../../public/telligent.png"
import Image from "next/image"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { useAuth } from "@/context/AuthProvider"
import { Search, Menu, User, Bell, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useModal } from "../context/modal"

export default function Header() {
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  const { setModalContent } = useModal()
  const [expanded, setExpanded] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchValue)
    // Implement your search logic here
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (expanded && inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setExpanded(false)
    }
  }

  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus()
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expanded])

  return (
    <div className="border-b border-gray-400 sticky top-0 bg-white z-1">
      <div className="mx-auto px-4 py-2 flex items-center justify-center">
        <div className="flex items-center space-x-4 w-[40vw]">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <span className="text-xs text-gray-600 hidden md:inline cursor-pointer">Sections</span>
          <span 
            className="text-xs text-gray-600 hidden md:inline cursor-pointer"
            onClick={() => router.push('/resources')}
          >
            Resources
          </span>
        </div>

        <div className="w-20vw" onClick={() => router.push('/')}>
          <Image src={logo} alt="blank" className="h-[22px] w-auto"/>
        </div>

        <div className="flex items-center space-x-4 w-[40vw] justify-end">
        {expanded ? (
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 pr-8 py-1 rounded-[10px] border border-gray-300 focus:outline-none transition-all duration-300 w-[300px]"
                placeholder="Search..."
              />
              <Search className="absolute left-3 h-5 w-5 text-gray-500" />
              <button type="button" onClick={handleToggle} className="absolute right-3 cursor-pointer">
                <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </form>
            ) : (
              <button
                onClick={handleToggle}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
          )}

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