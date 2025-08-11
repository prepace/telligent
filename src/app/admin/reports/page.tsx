"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	AlertCircle,
	ChevronDown,
	ChevronUp,
	Search,
	Filter,
	Calendar,
	User,
	Flag,
} from "lucide-react";

// Mock data for reported articles
const REPORTED_ARTICLES = [
	{
		id: "r1",
		title: "Controversial Political Opinion Piece",
		author: "Jane Smith",
		reportCount: 24,
		reportReasons: ["Misinformation", "Offensive content", "Political bias"],
		date: "2023-10-15",
		status: "Pending",
		category: "Politics",
		reports: [
			{
				user: "user123",
				reason: "Misinformation",
				comment:
					"Contains factually incorrect statements about election results",
				date: "2023-10-15",
			},
			{
				user: "user456",
				reason: "Offensive content",
				comment: "Uses derogatory language toward certain groups",
				date: "2023-10-15",
			},
			{
				user: "user789",
				reason: "Political bias",
				comment:
					"Extremely biased reporting without presenting alternative viewpoints",
				date: "2023-10-14",
			},
		],
	},
	{
		id: "r2",
		title: "Celebrity Scandal Exposé",
		author: "Robert Johnson",
		reportCount: 18,
		reportReasons: ["Privacy violation", "Unverified claims", "Defamation"],
		date: "2023-10-16",
		status: "Pending",
		category: "Entertainment",
		reports: [
			{
				user: "user234",
				reason: "Privacy violation",
				comment: "Publishes private information without consent",
				date: "2023-10-16",
			},
			{
				user: "user567",
				reason: "Unverified claims",
				comment: "Makes serious allegations without evidence",
				date: "2023-10-16",
			},
			{
				user: "user890",
				reason: "Defamation",
				comment: "Contains potentially libelous statements",
				date: "2023-10-15",
			},
		],
	},
	{
		id: "r3",
		title: "Medical Advice: Alternative Treatments",
		author: "Dr. Michael Brown",
		reportCount: 32,
		reportReasons: ["Harmful advice", "Misinformation", "Unverified claims"],
		date: "2023-10-14",
		status: "Under Review",
		category: "Health",
		reports: [
			{
				user: "user345",
				reason: "Harmful advice",
				comment: "Recommends dangerous treatments without medical basis",
				date: "2023-10-14",
			},
			{
				user: "user678",
				reason: "Misinformation",
				comment: "Contains medical claims contradicted by scientific consensus",
				date: "2023-10-14",
			},
			{
				user: "user901",
				reason: "Unverified claims",
				comment: "Makes health claims without citing peer-reviewed research",
				date: "2023-10-13",
			},
		],
	},
	{
		id: "r4",
		title: "Financial Market Manipulation Claims",
		author: "Sarah Williams",
		reportCount: 15,
		reportReasons: ["Unverified claims", "Potentially harmful", "Misleading"],
		date: "2023-10-17",
		status: "Pending",
		category: "Finance",
		reports: [
			{
				user: "user456",
				reason: "Unverified claims",
				comment: "Makes serious allegations without evidence",
				date: "2023-10-17",
			},
			{
				user: "user789",
				reason: "Potentially harmful",
				comment:
					"Could cause financial harm to readers who act on this information",
				date: "2023-10-17",
			},
			{
				user: "user012",
				reason: "Misleading",
				comment: "Presents speculation as fact",
				date: "2023-10-16",
			},
		],
	},
	{
		id: "r5",
		title: "Sports Doping Allegations",
		author: "David Wilson",
		reportCount: 21,
		reportReasons: ["Defamation", "Unverified claims", "Privacy violation"],
		date: "2023-10-13",
		status: "Dismissed",
		category: "Sports",
		reports: [
			{
				user: "user567",
				reason: "Defamation",
				comment: "Makes unsubstantiated claims that harm athlete's reputation",
				date: "2023-10-13",
			},
			{
				user: "user890",
				reason: "Unverified claims",
				comment: "Presents rumors as facts without evidence",
				date: "2023-10-13",
			},
			{
				user: "user123",
				reason: "Privacy violation",
				comment: "Reveals private medical information without consent",
				date: "2023-10-12",
			},
		],
	},
	{
		id: "r6",
		title: "Environmental Disaster Cover-Up",
		author: "Emily Davis",
		reportCount: 28,
		reportReasons: ["Misinformation", "Unverified claims", "Conspiracy theory"],
		date: "2023-10-12",
		status: "Removed",
		category: "Environment",
		reports: [
			{
				user: "user678",
				reason: "Misinformation",
				comment: "Contains factually incorrect statements about the incident",
				date: "2023-10-12",
			},
			{
				user: "user901",
				reason: "Unverified claims",
				comment: "Makes serious allegations without evidence",
				date: "2023-10-12",
			},
			{
				user: "user234",
				reason: "Conspiracy theory",
				comment: "Promotes unfounded conspiracy theories",
				date: "2023-10-11",
			},
		],
	},
	{
		id: "r7",
		title: "Religious Controversy Analysis",
		author: "Thomas Anderson",
		reportCount: 19,
		reportReasons: [
			"Offensive content",
			"Religious discrimination",
			"Inflammatory",
		],
		date: "2023-10-11",
		status: "Under Review",
		category: "Religion",
		reports: [
			{
				user: "user345",
				reason: "Offensive content",
				comment: "Contains disrespectful language toward religious groups",
				date: "2023-10-11",
			},
			{
				user: "user678",
				reason: "Religious discrimination",
				comment: "Shows clear bias against specific religious beliefs",
				date: "2023-10-11",
			},
			{
				user: "user901",
				reason: "Inflammatory",
				comment: "Seems designed to provoke religious tensions",
				date: "2023-10-10",
			},
		],
	},
];

function ReportsPageContent() {
	const searchParams = useSearchParams();
	const [statusFilter, setStatusFilter] = useState("all");
	const [reasonFilter, setReasonFilter] = useState("all");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const [authorFilter, setAuthorFilter] = useState("");
	const [dateFilter, setDateFilter] = useState("");
	const [reportCountFilter, setReportCountFilter] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
	const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
	const [sortField, setSortField] = useState("date");
	const [sortDirection, setSortDirection] = useState("desc");

	// Get unique report reasons for filter
	const allReasons = REPORTED_ARTICLES.flatMap(
		(article) => article.reportReasons,
	);
	const uniqueReasons = [...new Set(allReasons)];

	// Get unique categories for filter
	const allCategories = REPORTED_ARTICLES.map((article) => article.category);
	const uniqueCategories = [...new Set(allCategories)];

	// Check if there's an article ID in the URL params
	useEffect(() => {
		const articleId = searchParams.get("id");
		if (articleId) {
			setExpandedArticle(articleId);
		}
	}, [searchParams]);

	// Filter articles based on selected filters
	const filteredArticles = REPORTED_ARTICLES.filter((article) => {
		// Filter by status
		if (
			statusFilter !== "all" &&
			article.status.toLowerCase() !== statusFilter.toLowerCase()
		) {
			return false;
		}

		// Filter by reason
		if (
			reasonFilter !== "all" &&
			!article.reportReasons.some(
				(reason) => reason.toLowerCase() === reasonFilter.toLowerCase(),
			)
		) {
			return false;
		}

		// Filter by category
		if (
			categoryFilter !== "all" &&
			article.category.toLowerCase() !== categoryFilter.toLowerCase()
		) {
			return false;
		}

		// Filter by author
		if (
			authorFilter &&
			!article.author.toLowerCase().includes(authorFilter.toLowerCase())
		) {
			return false;
		}

		// Filter by date
		if (dateFilter && article.date !== dateFilter) {
			return false;
		}

		// Filter by report count
		if (reportCountFilter) {
			const count = Number.parseInt(reportCountFilter, 10);
			if (!isNaN(count) && article.reportCount < count) {
				return false;
			}
		}

		// Filter by search term
		if (
			searchTerm &&
			!article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			!article.author.toLowerCase().includes(searchTerm.toLowerCase())
		) {
			return false;
		}

		return true;
	});

	// Sort filtered articles
	const sortedArticles = [...filteredArticles].sort((a, b) => {
		if (sortField === "date") {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
			return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
		} else if (sortField === "reportCount") {
			return sortDirection === "asc"
				? a.reportCount - b.reportCount
				: b.reportCount - a.reportCount;
		} else if (sortField === "title") {
			return sortDirection === "asc"
				? a.title.localeCompare(b.title)
				: b.title.localeCompare(a.title);
		}
		return 0;
	});

	// Toggle expanded article details
	const toggleArticleDetails = (id: string) => {
		if (expandedArticle === id) {
			setExpandedArticle(null);
		} else {
			setExpandedArticle(id);
		}
	};

	// Toggle sort direction
	const toggleSort = (field: string) => {
		if (sortField === field) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortField(field);
			setSortDirection("desc");
		}
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Reported Content</h1>
				<Link
					href="/admin"
					className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
				>
					Back to Dashboard
				</Link>
			</div>

			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<div>
							<CardTitle>Reported Articles</CardTitle>
							<CardDescription>
								Articles flagged by users for review
							</CardDescription>
						</div>
						<Button
							variant="outline"
							onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
							className="flex items-center gap-2"
						>
							<Filter className="h-4 w-4" />
							{showAdvancedFilters ? "Hide Filters" : "Show Filters"}
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					{/* Basic Search */}
					<div className="flex flex-col md:flex-row gap-4 mb-6">
						<div className="flex-1">
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="text"
									placeholder="Search by title or author..."
									className="pl-8"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>
						</div>

						<div className="flex flex-wrap gap-4">
							<Select value={statusFilter} onValueChange={setStatusFilter}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Filter by status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All Statuses</SelectItem>
									<SelectItem value="pending">Pending</SelectItem>
									<SelectItem value="under review">Under Review</SelectItem>
									<SelectItem value="dismissed">Dismissed</SelectItem>
									<SelectItem value="removed">Removed</SelectItem>
								</SelectContent>
							</Select>

							<Select value={reasonFilter} onValueChange={setReasonFilter}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Filter by reason" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All Reasons</SelectItem>
									{uniqueReasons.map((reason) => (
										<SelectItem key={reason} value={reason.toLowerCase()}>
											{reason}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Advanced Filters */}
					{showAdvancedFilters && (
						<div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
							<h3 className="text-lg font-medium mb-4">Advanced Filters</h3>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Category
									</label>
									<Select
										value={categoryFilter}
										onValueChange={setCategoryFilter}
									>
										<SelectTrigger>
											<SelectValue placeholder="Filter by category" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">All Categories</SelectItem>
											{uniqueCategories.map((category) => (
												<SelectItem
													key={category}
													value={category.toLowerCase()}
												>
													{category}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Author
									</label>
									<div className="flex items-center">
										<User className="h-4 w-4 mr-2 text-gray-400" />
										<Input
											type="text"
											placeholder="Filter by author..."
											value={authorFilter}
											onChange={(e) => setAuthorFilter(e.target.value)}
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Date
									</label>
									<div className="flex items-center">
										<Calendar className="h-4 w-4 mr-2 text-gray-400" />
										<Input
											type="date"
											value={dateFilter}
											onChange={(e) => setDateFilter(e.target.value)}
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Minimum Reports
									</label>
									<div className="flex items-center">
										<Flag className="h-4 w-4 mr-2 text-gray-400" />
										<Input
											type="number"
											placeholder="Min report count..."
											value={reportCountFilter}
											onChange={(e) => setReportCountFilter(e.target.value)}
											min="1"
										/>
									</div>
								</div>
							</div>

							<div className="flex justify-end">
								<Button
									variant="outline"
									onClick={() => {
										setStatusFilter("all");
										setReasonFilter("all");
										setCategoryFilter("all");
										setAuthorFilter("");
										setDateFilter("");
										setReportCountFilter("");
										setSearchTerm("");
									}}
								>
									Reset Filters
								</Button>
							</div>
						</div>
					)}

					{/* Tabs for different report statuses */}
					<Tabs defaultValue="all" className="mb-6">
						<TabsList>
							<TabsTrigger value="all">All Reports</TabsTrigger>
							<TabsTrigger value="pending">Pending</TabsTrigger>
							<TabsTrigger value="under review">Under Review</TabsTrigger>
							<TabsTrigger value="dismissed">Dismissed</TabsTrigger>
							<TabsTrigger value="removed">Removed</TabsTrigger>
						</TabsList>

						<TabsContent value="all">
							<div className="text-sm text-muted-foreground mb-4">
								Showing {sortedArticles.length} of {REPORTED_ARTICLES.length}{" "}
								reported articles
							</div>
							{renderArticlesTable(sortedArticles)}
						</TabsContent>

						<TabsContent value="pending">
							{renderArticlesTable(
								sortedArticles.filter(
									(article) => article.status.toLowerCase() === "pending",
								),
							)}
						</TabsContent>

						<TabsContent value="under review">
							{renderArticlesTable(
								sortedArticles.filter(
									(article) => article.status.toLowerCase() === "under review",
								),
							)}
						</TabsContent>

						<TabsContent value="dismissed">
							{renderArticlesTable(
								sortedArticles.filter(
									(article) => article.status.toLowerCase() === "dismissed",
								),
							)}
						</TabsContent>

						<TabsContent value="removed">
							{renderArticlesTable(
								sortedArticles.filter(
									(article) => article.status.toLowerCase() === "removed",
								),
							)}
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);

	function renderArticlesTable(articles: typeof REPORTED_ARTICLES) {
		return (
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Title
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								<button
									className="flex items-center"
									onClick={() => toggleSort("title")}
								>
									Title
									{sortField === "title" &&
										(sortDirection === "asc" ? (
											<ChevronUp className="ml-1 h-4 w-4" />
										) : (
											<ChevronDown className="ml-1 h-4 w-4" />
										))}
								</button>
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Author
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								<button
									className="flex items-center"
									onClick={() => toggleSort("reportCount")}
								>
									Reports
									{sortField === "reportCount" &&
										(sortDirection === "asc" ? (
											<ChevronUp className="ml-1 h-4 w-4" />
										) : (
											<ChevronDown className="ml-1 h-4 w-4" />
										))}
								</button>
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Status
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								<button
									className="flex items-center"
									onClick={() => toggleSort("date")}
								>
									Date
									{sortField === "date" &&
										(sortDirection === "asc" ? (
											<ChevronUp className="ml-1 h-4 w-4" />
										) : (
											<ChevronDown className="ml-1 h-4 w-4" />
										))}
								</button>
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{articles.length > 0 ? (
							articles.map((article) => (
								<>
									<tr key={article.id} className="hover:bg-gray-50">
										<td className="px-6 py-4">
											<div className="flex items-center">
												<button
													onClick={() => toggleArticleDetails(article.id)}
													className="mr-2 text-gray-500 focus:outline-none"
												>
													{expandedArticle === article.id ? (
														<ChevronDown className="h-5 w-5" />
													) : (
														<ChevronUp className="h-5 w-5" />
													)}
												</button>
												<div className="text-sm font-medium text-gray-900">
													{article.title}
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-500">
												{article.category}
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-500">
												{article.author}
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<Badge
												variant="destructive"
												className="flex items-center gap-1"
											>
												<AlertCircle className="h-3 w-3" />
												{article.reportCount}
											</Badge>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<Badge
												className={`${
													article.status === "Pending"
														? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
														: article.status === "Under Review"
															? "bg-blue-100 text-blue-800 hover:bg-blue-100"
															: article.status === "Dismissed"
																? "bg-gray-100 text-gray-800 hover:bg-gray-100"
																: article.status === "Removed"
																	? "bg-red-100 text-red-800 hover:bg-red-100"
																	: "bg-gray-100 text-gray-800 hover:bg-gray-100"
												}`}
											>
												{article.status}
											</Badge>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-500">
												{article.date}
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<div className="flex justify-end space-x-2">
												<Link
													href={`/admin/articles/${article.id}`}
													className="text-blue-600 hover:text-blue-900"
												>
													Review
												</Link>
												<button className="text-red-600 hover:text-red-900">
													Remove
												</button>
												<button className="text-gray-600 hover:text-gray-900">
													Dismiss
												</button>
											</div>
										</td>
									</tr>
									{expandedArticle === article.id && (
										<tr>
											<td colSpan={7} className="px-6 py-4 bg-gray-50">
												<div className="text-sm">
													<h4 className="font-medium mb-2">Report Details:</h4>
													<div className="space-y-3">
														{article.reports.map((report, index) => (
															<div
																key={index}
																className="border-l-4 border-red-300 pl-3 py-2"
															>
																<div className="flex justify-between">
																	<span className="font-medium">
																		{report.user}
																	</span>
																	<span className="text-gray-500 text-xs">
																		{report.date}
																	</span>
																</div>
																<div className="mt-1">
																	<Badge
																		variant="outline"
																		className="bg-red-50"
																	>
																		{report.reason}
																	</Badge>
																</div>
																<p className="mt-1 text-gray-700">
																	{report.comment}
																</p>
															</div>
														))}
													</div>
												</div>
											</td>
										</tr>
									)}
								</>
							))
						) : (
							<tr>
								<td
									colSpan={7}
									className="px-6 py-10 text-center text-gray-500"
								>
									No reported articles found matching your filters
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default function ReportsPage() {
	return (
		<Suspense
			fallback={<div className="p-6 text-sm text-gray-500">Loading…</div>}
		>
			<ReportsPageContent />
		</Suspense>
	);
}
