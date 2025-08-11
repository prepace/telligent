"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebounce } from "@/hooks/use-debounce"

// Mock data for articles (in a real app, this would come from an API with pagination)
const MOCK_ARTICLES = [
  {
    id: "1",
    title: "Breaking News: Tech Innovation",
    category: "Technology",
    author: "John Doe",
    status: "Published",
    date: "2023-03-15",
    views: 1245,
    tags: ["tech", "innovation", "ai"],
    featured: true,
  },
  {
    id: "2",
    title: "Sports Update: Championship Results",
    category: "Sports",
    author: "Jane Smith",
    status: "Published",
    date: "2023-03-14",
    views: 3421,
    tags: ["sports", "championship"],
    featured: false,
  },
  {
    id: "3",
    title: "Financial Markets: Weekly Review",
    category: "Finance",
    author: "Robert Johnson",
    status: "Draft",
    date: "2023-03-13",
    views: 0,
    tags: ["finance", "markets", "stocks"],
    featured: false,
  },
  {
    id: "4",
    title: "Entertainment: New Movie Releases",
    category: "Entertainment",
    author: "Sarah Williams",
    status: "Published",
    date: "2023-03-12",
    views: 2156,
    tags: ["movies", "entertainment"],
    featured: true,
  },
  {
    id: "5",
    title: "Health: Nutrition Tips for Summer",
    category: "Health",
    author: "Michael Brown",
    status: "Draft",
    date: "2023-03-11",
    views: 0,
    tags: ["health", "nutrition", "summer"],
    featured: false,
  },
]

// Categories for filter
const CATEGORIES = [
  "Technology",
  "Sports",
  "Finance",
  "Entertainment",
  "Health",
  "Politics",
  "Science",
  "Education",
  "Travel",
  "Food",
]

// Authors for filter
const AUTHORS = [
  "John Doe",
  "Jane Smith",
  "Robert Johnson",
  "Sarah Williams",
  "Michael Brown",
  "Emily Davis",
  "David Wilson",
  "Lisa Anderson",
]

// Tags for filter
const TAGS = [
  "tech",
  "innovation",
  "ai",
  "sports",
  "championship",
  "finance",
  "markets",
  "stocks",
  "movies",
  "entertainment",
  "health",
  "nutrition",
]

export default function ArticlesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // State for filters
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "all")
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get("category") || "all")
  const [authorFilter, setAuthorFilter] = useState(searchParams.get("author") || "all")
  const [tagFilter, setTagFilter] = useState(searchParams.get("tag") || "all")
  const [featuredFilter, setFeaturedFilter] = useState(searchParams.get("featured") || "all")

  const [dateRange, setDateRange] = useState({
    from: searchParams.get("dateFrom") || "",
    to: searchParams.get("dateTo") || "",
  })

  const [viewsRange, setViewsRange] = useState({
    min: searchParams.get("viewsMin") || "",
    max: searchParams.get("viewsMax") || "",
  })

  const [sortField, setSortField] = useState(searchParams.get("sortField") || "date")
  const [sortOrder, setSortOrder] = useState(searchParams.get("sortOrder") || "desc")

  // Pagination
  const [currentPage, setCurrentPage] = useState(Number.parseInt(searchParams.get("page") || "1", 10))
  const [itemsPerPage, setItemsPerPage] = useState(Number.parseInt(searchParams.get("limit") || "10", 10))

  // Advanced filter visibility
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  // Mock data for articles (in a real app, this would be fetched from an API)
  const [articles, setArticles] = useState(MOCK_ARTICLES)
  const [totalArticles] = useState(1000000); // Mock total count TODO: setTotalArticles
  const [loading, setLoading] = useState(false)

  // Tag input and selected tags
  const [tagInput, setTagInput] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Add these functions to handle tag operations
  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      const newTags = [...selectedTags, tag]
      setSelectedTags(newTags)
      setTagInput("")
      // Update the URL filter when tags change
      if (newTags.length === 0) {
        setTagFilter("all")
      } else {
        setTagFilter(newTags.join(","))
      }
    }
  }

  const removeTag = (tagToRemove: string) => {
    const newTags = selectedTags.filter((tag) => tag !== tagToRemove)
    setSelectedTags(newTags)
    // Update the URL filter when tags change
    if (newTags.length === 0) {
      setTagFilter("all")
    } else {
      setTagFilter(newTags.join(","))
    }
  }

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault()
      const matchingTags = TAGS.filter(
        (tag) => tag.toLowerCase().includes(tagInput.toLowerCase()) && !selectedTags.includes(tag),
      )
      if (matchingTags.length > 0) {
        addTag(matchingTags[0])
      } else if (tagInput.trim()) {
        // Allow adding custom tags that aren't in the predefined list
        addTag(tagInput.trim())
      }
    }
  }

  // Update URL with filters
  useEffect(() => {
    const params = new URLSearchParams()

    if (debouncedSearchTerm) params.set("search", debouncedSearchTerm)
    if (statusFilter !== "all") params.set("status", statusFilter)
    if (categoryFilter !== "all") params.set("category", categoryFilter)
    if (authorFilter !== "all") params.set("author", authorFilter)
    selectedTags.forEach((tag) => params.append("tags", tag))
    if (featuredFilter !== "all") params.set("featured", featuredFilter)
    if (dateRange.from) params.set("dateFrom", dateRange.from)
    if (dateRange.to) params.set("dateTo", dateRange.to)
    if (viewsRange.min) params.set("viewsMin", viewsRange.min)
    if (viewsRange.max) params.set("viewsMax", viewsRange.max)
    if (sortField !== "date") params.set("sortField", sortField)
    if (sortOrder !== "desc") params.set("sortOrder", sortOrder)
    if (currentPage !== 1) params.set("page", currentPage.toString())
    if (itemsPerPage !== 10) params.set("limit", itemsPerPage.toString())

    const url = params.toString() ? `?${params.toString()}` : ""
    router.push(`/admin/articles${url}`, { scroll: false })

    // In a real app, this is where you would fetch data from the API
    fetchArticles()
  }, [
    debouncedSearchTerm,
    statusFilter,
    categoryFilter,
    authorFilter,
    selectedTags,
    featuredFilter,
    dateRange.from,
    dateRange.to,
    viewsRange.min,
    viewsRange.max,
    sortField,
    sortOrder,
    currentPage,
    itemsPerPage,
    router,
  ])

  // Add this effect to initialize selected tags from URL params
  useEffect(() => {
    if (tagFilter && tagFilter !== "all") {
      setSelectedTags(tagFilter.split(","))
    } else {
      setSelectedTags([])
    }
  }, [])

  // Mock function to fetch articles (in a real app, this would be an API call)
  const fetchArticles = async () => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // In a real app, you would filter based on all criteria including the new tag format
    // For the mock implementation, we can filter the articles here
    let filteredArticles = [...MOCK_ARTICLES]

    // Filter by tags if any are selected
    if (selectedTags.length > 0) {
      filteredArticles = filteredArticles.filter((article) => selectedTags.some((tag) => article.tags.includes(tag)))
    }

    // Apply author filter if set
    if (authorFilter !== "all") {
      filteredArticles = filteredArticles.filter((article) =>
        article.author.toLowerCase().includes(authorFilter.toLowerCase()),
      )
    }

    setArticles(filteredArticles)
    setLoading(false)
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setCategoryFilter("all")
    setAuthorFilter("all")
    setSelectedTags([])
    setFeaturedFilter("all")
    setDateRange({ from: "", to: "" })
    setViewsRange({ min: "", max: "" })
    setSortField("date")
    setSortOrder("desc")
    setCurrentPage(1)
  }

  // Handle date range change
  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle views range change
  const handleViewsRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setViewsRange((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Delete article handler
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      setArticles(articles.filter((article) => article.id !== id))
      // In a real app, you would make an API call here
    }
  }

  // Calculate total pages
  const totalPages = Math.ceil(totalArticles / itemsPerPage)

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages is less than max pages to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always show first page
      pageNumbers.push(1)

      // Calculate start and end page numbers
      let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2) + 1)
      let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 3)

      // Adjust if we're near the beginning
      if (startPage === 2) {
        endPage = Math.min(totalPages - 1, maxPagesToShow - 1)
      }

      // Adjust if we're near the end
      if (endPage === totalPages - 1) {
        startPage = Math.max(2, totalPages - maxPagesToShow + 2)
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("ellipsis1")
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis2")
      }

      // Always show last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Articles</h1>
        <Link
          href="/admin/articles/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Create New Article
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        {/* Basic Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title, content, or ID..."
                className="w-full px-4 py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <select
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="archived">Archived</option>
            </select>

            <select
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
            </button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium mb-4">Advanced Filters</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search authors..."
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={authorFilter === "all" ? "" : authorFilter}
                    onChange={(e) => setAuthorFilter(e.target.value || "all")}
                  />
                  {authorFilter !== "all" && (
                    <button
                      onClick={() => setAuthorFilter("all")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Clear author filter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {authorFilter !== "all" &&
                  AUTHORS.filter(
                    (author) =>
                      author.toLowerCase().includes(authorFilter.toLowerCase()) &&
                      author.toLowerCase() !== authorFilter.toLowerCase(),
                  ).length > 0 && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                      {AUTHORS.filter(
                        (author) =>
                          author.toLowerCase().includes(authorFilter.toLowerCase()) &&
                          author.toLowerCase() !== authorFilter.toLowerCase(),
                      ).map((author) => (
                        <div
                          key={author}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => setAuthorFilter(author)}
                        >
                          {author}
                        </div>
                      ))}
                    </div>
                  )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2 p-2 border rounded focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none">
                    {selectedTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                        <button
                          type="button"
                          className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600 focus:outline-none"
                          onClick={() => removeTag(tag)}
                        >
                          <span className="sr-only">Remove tag {tag}</span>
                          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                          </svg>
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      className="flex-1 outline-none min-w-[120px]"
                      placeholder={selectedTags.length > 0 ? "" : "Search tags..."}
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                    />
                  </div>
                  {tagInput && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                      {TAGS.filter(
                        (tag) => tag.toLowerCase().includes(tagInput.toLowerCase()) && !selectedTags.includes(tag),
                      ).map((tag) => (
                        <div
                          key={tag}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addTag(tag)}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Featured</label>
                <select
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={featuredFilter}
                  onChange={(e) => setFeaturedFilter(e.target.value)}
                >
                  <option value="all">All Articles</option>
                  <option value="featured">Featured Only</option>
                  <option value="not-featured">Not Featured</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date From</label>
                <input
                  type="date"
                  name="from"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={dateRange.from}
                  onChange={handleDateRangeChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date To</label>
                <input
                  type="date"
                  name="to"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={dateRange.to}
                  onChange={handleDateRangeChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Views Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    name="min"
                    placeholder="Min"
                    className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={viewsRange.min}
                    onChange={handleViewsRangeChange}
                  />
                  <input
                    type="number"
                    name="max"
                    placeholder="Max"
                    className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={viewsRange.max}
                    onChange={handleViewsRangeChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center">
              <div className="flex space-x-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                  <select
                    className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value)}
                  >
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="views">Views</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                  <select
                    className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 mt-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}

        {/* Results Count and Items Per Page */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="text-sm text-gray-500 mb-2 sm:mb-0">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalArticles)} of{" "}
            {totalArticles.toLocaleString()} articles
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Show</span>
            <select
              className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number.parseInt(e.target.value, 10))
                setCurrentPage(1) // Reset to first page when changing items per page
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-sm text-gray-500">per page</span>
          </div>
        </div>

        {/* Articles Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading && (
                <>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <tr key={`loading-${index}`} className="animate-pulse">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="h-4 bg-gray-200 rounded w-24 ml-auto"></div>
                      </td>
                    </tr>
                  ))}
                </>
              )}

              {!loading && articles.length > 0 && (
                <>
                  {articles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {article.title}
                            {article.featured && (
                              <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{article.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{article.author}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            article.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : article.status === "Draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : article.status === "Scheduled"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {article.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{article.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{article.views.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link href={`/admin/articles/${article.id}`} className="text-blue-600 hover:text-blue-900">
                            View
                          </Link>
                          <Link
                            href={`/admin/articles/${article.id}/edit`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </Link>
                          <button onClick={() => handleDelete(article.id)} className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}

              {!loading && articles.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                    No articles found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-gray-700 mb-4 sm:mb-0">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="First Page"
            >
              &laquo;
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous Page"
            >
              &lsaquo;
            </button>

            {getPageNumbers().map((page) => {
              if (page === "ellipsis1" || page === "ellipsis2") {
                return (
                  <span key={page} className="px-3 py-1">
                    ...
                  </span>
                )
              }
              return (
                <button
                  key={`page-${page}`}
                  onClick={() => setCurrentPage(Number(page))}
                  className={`px-3 py-1 border rounded text-sm ${
                    currentPage === page ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next Page"
            >
              &rsaquo;
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Last Page"
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
