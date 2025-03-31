"use client";

import  ReactMarkdown from "react-markdown"

interface ChildProps {
  title: string;
  authorName: string;
  authorEmail: string;
  category: string;
  description: string;
  featuredImage: File | null;
  content: string;
};

export default function ViewMode({ title, authorName, authorEmail, category, description, featuredImage, content }: ChildProps) {
  
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}