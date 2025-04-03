"use client";

import { useState, useEffect } from "react";

import EditingMode from "@/components/CreateArticle/editing-mode";
import ViewMode from "@/components/CreateArticle/view-mode";

export default function ArticleSubmissionPage() {
  const [mode, setMode] = useState<string>("editing");
  const [title, setTitle] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [authorEmail, setAuthorEmail] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [imageDescription, setImageDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagsInput, setTagsInput] = useState<string>("");
  const [metaTitle, setMetaTitle] = useState<string>("");
  const [metaDescription, setMetaDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [publishDate, setPublishDate] = useState<string>("");

  const changeMode = () => {
    if (mode === "editing") {
      setMode("viewing")
    } else {
      setMode("editing")
    };
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log('hello')

    const formData = new FormData();

    formData.append("title", title);
    formData.append("author_name", authorName);
    formData.append("author_Email", authorEmail);
    formData.append("category", category);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("image_description", imageDescription);
    formData.append("content", content);
    formData.append("tags", JSON.stringify(tags)); // Convert array to JSON string
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("status", status);
    formData.append("publish_date", publishDate);

    if (featuredImage) {
      formData.append("featured_image", featuredImage); // File object
    }

    const response = fetch('/api/articles/', {
      method: 'POST',
      body: formData,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Create New Article</h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
              type="button"
              onClick={changeMode}
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              {mode === "editing" ? "View" : "Edit"}
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Save as Draft
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Publish
            </button>
          </div>
        </div>
        {mode === "editing" && <EditingMode  
          setImageDescription={setImageDescription} 
          setMetaDescription={setMetaDescription}
          setFeaturedImage={setFeaturedImage} 
          setAuthorEmail={setAuthorEmail} 
          setDescription={setDescription} 
          setPublishDate={setPublishDate} 
          setAuthorName={setAuthorName}
          setMetaTitle={setMetaTitle}
          setTagsInput={setTagsInput} 
          handleSubmit={handleSubmit}
          setCategory={setCategory}
          setContent={setContent} 
          setStatus={setStatus} 
          setTitle={setTitle} 
          setSlug={setSlug}
          setTags={setTags}
          imageDescription={imageDescription} 
          metaDescription={metaDescription}
          featuredImage={featuredImage} 
          publishDate={publishDate} 
          authorEmail={authorEmail}
          description={description} 
          authorName={authorName} 
          metaTitle={metaTitle}
          tagsInput={tagsInput}
          category={category} 
          content={content} 
          status={status}
          title={title} 
          tags={tags}
          slug={slug}
          />
        }
        
        {mode === "viewing" && <ViewMode 
          title={title} 
          authorName={authorName} 
          authorEmail={authorEmail} 
          category={category}
          description={description} 
          featuredImage={featuredImage} 
          content={content} 
          publishDate={publishDate}
          tags={tags}
        />}
      </main>
    </div>
  )
}
