"use client";

import { useState, useEffect } from "react";
import {
	Search,
	ArrowUpDown,
	TrendingUp,
	Eye,
	Repeat,
	Calendar,
	SortAsc,
	SortDesc,
} from "lucide-react";

type MyArticle = {
	id: number | string;
	title: string;
	excerpt: string;
	date: string;
	author: string;
	category: string;
	readTime: string;
	views: number;
	reposts: number;
	trending: boolean;
	created_at?: string;
};

export default function ArticlesPage() {
	// This would typically come from a database
	const userArticles: MyArticle[] = [
		{
			id: 1,
			title: "The Future of Web Development",
			excerpt:
				"Exploring the latest trends and technologies shaping the future of web development.",
			date: "2025-03-21",
			author: "Jane Doe",
			category: "Technology",
			readTime: "5 min read",
			views: 1245,
			reposts: 32,
			trending: true,
		},
		{
			id: 2,
			title: "Understanding Modern JavaScript Frameworks",
			excerpt:
				"A deep dive into popular JavaScript frameworks and how they're changing the development landscape.",
			date: "2025-03-18",
			author: "John Smith",
			category: "Programming",
			readTime: "8 min read",
			views: 876,
			reposts: 18,
			trending: false,
		},
		{
			id: 3,
			title: "The Rise of AI in Content Creation",
			excerpt:
				"How artificial intelligence is revolutionizing the way we create and consume content online.",
			date: "2025-03-15",
			author: "Jane Doe",
			category: "AI & Technology",
			readTime: "6 min read",
			views: 2134,
			reposts: 87,
			trending: true,
		},
		{
			id: 4,
			title: "Responsive Design Best Practices",
			excerpt:
				"Essential tips and techniques for creating responsive websites that work on any device.",
			date: "2025-03-10",
			author: "John Smith",
			category: "Design",
			readTime: "4 min read",
			views: 543,
			reposts: 12,
			trending: false,
		},
		{
			id: 5,
			title: "Introduction to TypeScript",
			excerpt:
				"Learn the basics of TypeScript and how it can improve your JavaScript development workflow.",
			date: "2025-03-05",
			author: "Jane Doe",
			category: "Programming",
			readTime: "7 min read",
			views: 987,
			reposts: 24,
			trending: false,
		},
		{
			id: 6,
			title: "Building Accessible Web Applications",
			excerpt:
				"Best practices for creating web applications that are accessible to all users.",
			date: "2025-03-01",
			author: "John Smith",
			category: "Design",
			readTime: "6 min read",
			views: 1432,
			reposts: 45,
			trending: true,
		},
	];

	const [myArticles, setMyArticles] = useState<MyArticle[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOption, setSortOption] = useState("date-desc");

	// Filter articles based on search query
	const searchFilteredArticles = myArticles.filter((article) => {
		return (
			article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	// Sort articles based on selected option
	const sortedArticles = [...searchFilteredArticles].sort((a, b) => {
		switch (sortOption) {
			case "date-desc":
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			case "date-asc":
				return new Date(a.date).getTime() - new Date(b.date).getTime();
			case "title-asc":
				return a.title.localeCompare(b.title);
			case "title-desc":
				return b.title.localeCompare(a.title);
			case "views-desc":
				return b.views - a.views;
			case "views-asc":
				return a.views - b.views;
			case "reposts-desc":
				return b.reposts - a.reposts;
			case "reposts-asc":
				return a.reposts - b.reposts;
			case "trending":
				return b.trending ? 1 : -1;
			default:
				return 0;
		}
	});

	// Sort options with icons
	const sortOptions = [
		{
			value: "date-desc",
			label: "Newest First",
			icon: <Calendar className="h-4 w-4" />,
		},
		{
			value: "date-asc",
			label: "Oldest First",
			icon: <Calendar className="h-4 w-4" />,
		},
		{
			value: "title-asc",
			label: "Title (A-Z)",
			icon: <SortAsc className="h-4 w-4" />,
		},
		{
			value: "title-desc",
			label: "Title (Z-A)",
			icon: <SortDesc className="h-4 w-4" />,
		},
		{
			value: "views-desc",
			label: "Most Views",
			icon: <Eye className="h-4 w-4" />,
		},
		{
			value: "views-asc",
			label: "Least Views",
			icon: <Eye className="h-4 w-4" />,
		},
		{
			value: "reposts-desc",
			label: "Most Reposts",
			icon: <Repeat className="h-4 w-4" />,
		},
		{
			value: "reposts-asc",
			label: "Least Reposts",
			icon: <Repeat className="h-4 w-4" />,
		},
		{
			value: "trending",
			label: "Trending",
			icon: <TrendingUp className="h-4 w-4" />,
		},
	];

	useEffect(() => {
		async function fetchArticles() {
			if (process.env.NEXT_PUBLIC_WIREFRAME === "true") {
				setMyArticles(userArticles);
				return;
			}
			const response = await fetch("/api/articles/");
			if (!response.ok) {
				setMyArticles([]);
				return;
			}
			const data = await response.json();
			setMyArticles(Array.isArray(data) ? data : []);
		}

		fetchArticles();
	}, []);

	return (
		<div className="min-h-screen bg-gray-50 p-6 md:p-8">
			<div className="mx-auto max-w-7xl">
				<h1 className="mb-2 text-3xl font-bold text-gray-900">Your Articles</h1>
				<p className="mb-6 text-gray-600">
					Browse the articles you&apos;ve published on our platform.
				</p>

				<div className="mb-6 flex flex-col gap-4 sm:flex-row">
					{/* Search Bar */}
					<div className="relative flex-1">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<Search className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="text"
							className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
							placeholder="Search articles by title or content..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					{/* Sort Dropdown */}
					<div className="w-full sm:w-64">
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<ArrowUpDown className="h-5 w-5 text-gray-400" />
							</div>
							<select
								className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 appearance-none"
								value={sortOption}
								onChange={(e) => setSortOption(e.target.value)}
							>
								{sortOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									aria-hidden="true"
									focusable="false"
								>
									<title>Dropdown</title>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Filter Pills */}
				<div className="mb-6 flex flex-wrap gap-2">
					{sortOptions.map((option) => (
						<button
							key={option.value}
							onClick={() => setSortOption(option.value)}
							type="button"
							className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
								sortOption === option.value
									? "bg-blue-100 text-blue-800"
									: "bg-gray-100 text-gray-800 hover:bg-gray-200"
							}`}
						>
							{option.icon}
							{option.label}
						</button>
					))}
				</div>

				{/* Articles Grid */}
				{sortedArticles.length > 0 ? (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{sortedArticles.map((article) => (
							<div
								key={article.id}
								className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
							>
								<div className="relative h-48 bg-gray-200">
									{article.trending && (
										<div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
											<TrendingUp className="h-3 w-3" />
											Trending
										</div>
									)}
								</div>
								<div className="flex flex-1 flex-col p-4">
									<div className="mb-2 flex items-center justify-between">
										<span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
											{article?.category}
										</span>
										<span className="text-xs text-gray-500">
											{article?.readTime}
										</span>
									</div>
									<h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
										{article?.title}
									</h2>
									<p className="mb-4 flex-1 line-clamp-3 text-sm text-gray-600">
										{article?.excerpt}
									</p>
									<div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
										<div className="flex items-center gap-1">
											<Eye className="h-3 w-3" />
											{article?.views?.toLocaleString()}
										</div>
										<div className="flex items-center gap-1">
											<Repeat className="h-3 w-3" />
											{article?.reposts?.toLocaleString()}
										</div>
									</div>
									<div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
										<div className="text-xs text-gray-500">
											{new Date(
												article?.created_at ?? article.date,
											).toLocaleDateString("en-US", {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</div>
										<div className="flex gap-2">
											<button
												type="button"
												className="rounded px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50"
											>
												Edit
											</button>
											<button
												type="button"
												className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center py-12 bg-white rounded-lg border border-gray-200">
						<p className="text-gray-500 mb-2">No articles found</p>
						<p className="text-sm text-gray-400">
							Try adjusting your search criteria
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
