"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, MoreHorizontal, Search, Pencil, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Mock data for categories
const categories = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    articleCount: 24,
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Politics",
    slug: "politics",
    articleCount: 18,
    createdAt: "2023-01-15",
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    articleCount: 15,
    createdAt: "2023-02-20",
  },
  {
    id: "4",
    name: "Health",
    slug: "health",
    articleCount: 12,
    createdAt: "2023-03-10",
  },
  {
    id: "5",
    name: "Science",
    slug: "science",
    articleCount: 9,
    createdAt: "2023-04-05",
  },
  {
    id: "6",
    name: "Entertainment",
    slug: "entertainment",
    articleCount: 21,
    createdAt: "2023-05-12",
  },
  {
    id: "7",
    name: "Sports",
    slug: "sports",
    articleCount: 17,
    createdAt: "2023-06-18",
  },
  {
    id: "8",
    name: "Environment",
    slug: "environment",
    articleCount: 8,
    createdAt: "2023-07-22",
  },
]

export function CategoriesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line
	  interface Category {
		id: string;
		name: string;
		slug: string;
		articleCount: number;
		createdAt: string;
	  }
	  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null)

  const itemsPerPage = 5

  // Filter  setCategoryToDelete] = useState<string | null>(null);

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) => {
    return (
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCategories = filteredCategories.slice(startIndex, startIndex + itemsPerPage)

  // Handle category deletion
  const handleDeleteCategory = async () => {
    if (categoryToDelete) {
      // In a real app, you would call an API to delete the category
      console.log(`Deleting category with ID: ${categoryToDelete}`)
      setCategoryToDelete(null)
      // Refresh the categories list
    }
  }

  return (
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex w-full max-w-sm items-center space-x-2">
						<div className="relative flex-1">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search categories..."
								className="pl-8"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Slug</TableHead>
								<TableHead>Articles</TableHead>
								<TableHead>Created</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{paginatedCategories.length > 0 ? (
								paginatedCategories.map((category) => (
									<TableRow key={category.id}>
										<TableCell className="font-medium">
											{category.name}
										</TableCell>
										<TableCell>{category.slug}</TableCell>
										<TableCell>{category.articleCount}</TableCell>
										<TableCell>{category.createdAt}</TableCell>
										<TableCell className="text-right">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="ghost" className="h-8 w-8 p-0">
														<span className="sr-only">Open menu</span>
														<MoreHorizontal className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuLabel>Actions</DropdownMenuLabel>
													<Dialog>
														<DialogTrigger asChild>
															<DropdownMenuItem
																onSelect={(e) => {
																	e.preventDefault();
																	setEditCategory(category);
																}}
															>
																<Pencil className="mr-2 h-4 w-4" />
																Edit
															</DropdownMenuItem>
														</DialogTrigger>
														<DialogContent>
															<DialogHeader>
																<DialogTitle>Edit Category</DialogTitle>
																<DialogDescription>
																	Make changes to the category here.
																</DialogDescription>
															</DialogHeader>
															<div className="grid gap-4 py-4">
																<div className="grid grid-cols-4 items-center gap-4">
																	<Label htmlFor="name" className="text-right">
																		Name
																	</Label>
																	<Input
																		defaultValue={editCategory?.name}
																		className="col-span-3"
																	/>
																</div>
																<div className="grid grid-cols-4 items-center gap-4">
																	<Label htmlFor="slug" className="text-right">
																		Slug
																	</Label>
																	<Input
																		defaultValue={editCategory?.slug}
																		className="col-span-3"
																	/>
																</div>
															</div>
															<DialogFooter>
																<Button type="submit">Save changes</Button>
															</DialogFooter>
														</DialogContent>
													</Dialog>
													<DropdownMenuSeparator />
													<AlertDialog>
														<AlertDialogTrigger asChild>
															<DropdownMenuItem
																onSelect={(e) => e.preventDefault()}
															>
																<Trash2 className="mr-2 h-4 w-4" />
																Delete
															</DropdownMenuItem>
														</AlertDialogTrigger>
														<AlertDialogContent>
															<AlertDialogHeader>
																<AlertDialogTitle>
																	Are you absolutely sure?
																</AlertDialogTitle>
																<AlertDialogDescription>
																	This action cannot be undone. This will
																	permanently delete the category &quot;{category.name}&quot; and may affect articles using
																	this category.
																</AlertDialogDescription>
															</AlertDialogHeader>
															<AlertDialogFooter>
																<AlertDialogCancel>Cancel</AlertDialogCancel>
																<AlertDialogAction
																	onClick={() => handleDeleteCategory()}
																	className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
																>
																	Delete
																</AlertDialogAction>
															</AlertDialogFooter>
														</AlertDialogContent>
													</AlertDialog>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell colSpan={5} className="h-24 text-center">
										No categories found.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex items-center justify-end space-x-2 py-4">
						<Button
							variant="outline"
							size="sm"
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
						>
							<ChevronLeft className="h-4 w-4" />
							<span className="sr-only">Previous Page</span>
						</Button>
						<div className="text-sm text-muted-foreground">
							Page {currentPage} of {totalPages}
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
						>
							<ChevronRight className="h-4 w-4" />
							<span className="sr-only">Next Page</span>
						</Button>
					</div>
				)}
			</div>
		);
}

