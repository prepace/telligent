"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    setIsUploading(true)

    try {
      // In a real app, you would upload the file to your server or a storage service
      // For this demo, we'll just create a local object URL
      const url = URL.createObjectURL(file)
      onChange(url)
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  // Handle file input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  // Remove image
  const handleRemove = () => {
    onChange("")
  }

  return (
    <div className="space-y-4">
      {value ? (
        <div className="relative rounded-md overflow-hidden border">
          <div className="aspect-video relative">
            <Image src={value || "/placeholder.svg"} alt="Featured image" fill className="object-cover" />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-md ${
            dragActive ? "border-primary" : "border-muted-foreground/25"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center p-6 text-center h-[200px]">
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">Drag and drop an image, or click to browse</p>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleInputChange}
              disabled={isUploading}
            />
            <Label htmlFor="image-upload" className="cursor-pointer">
              <Button
                type="button"
                variant="secondary"
                disabled={isUploading}
                className="mt-2"
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                {isUploading ? "Uploading..." : "Select Image"}
              </Button>
            </Label>
          </div>
        </div>
      )}
    </div>
  )
}

