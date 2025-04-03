"use client";

import Sidebar from "../Sidebar";
import Image from "next/image";

import { useState } from "react";
import { formatDateArticle } from "@/utils/formatting";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Menu, User, Bell, Share2, Bookmark } from "lucide-react";

interface ChildProps {
  title: string;
  authorName: string;
  authorEmail: string;
  category: string;
  description: string;
  featuredImage: File | null;
  content: string;
  publishDate: string;
  tags: string[];
};

export default function ViewMode({ 
    title, 
    authorName, 
    authorEmail, 
    category, 
    description, 
    featuredImage, 
    content, 
    publishDate,
    tags
  }: ChildProps) {

  console.log(tags)
    
  return (
    <div>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Article Content */}
        <div className="lg:col-span-8">
          <div className="mb-6">
            <div className="text-sm text-gray-600 uppercase font-bold mb-2">{category}</div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
              {title}
            </h1>
            <div className="text-ms text-gray-600 mb-4">
              {description}
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <span className="font-medium">By {authorName}</span>
              <span className="mx-2">|</span>
              <span>{formatDateArticle(publishDate)}</span>
            </div>
            <div className="flex space-x-3 mb-6">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {featuredImage && <div className="relative aspect-video mb-6">
            <Image
              src={featuredImage}
              alt="Mental health professionals in a discussion"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
              Mental health professionals discuss new treatment approaches at the National Mental Health Summit in
              Washington. (Photo: Jane Smith/Health)
            </div>
          </div>}

        <p className="whitespace-pre-line">{content}</p>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </main>
    </div>
  )
}