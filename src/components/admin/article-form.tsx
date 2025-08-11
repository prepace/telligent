"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { createArticle, updateArticle } from "@/lib/articles";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "@/components/Admin/rich-text-editor";
import { ImageUpload } from "@/components/Admin/image-upload";

// Mock categories
const categories = [
  { id: "1", name: "Technology" },
  { id: "2", name: "Politics" },
  { id: "3", name: "Business" },
  { id: "4", name: "Health" },
  { id: "5", name: "Science" },
  { id: "6", name: "Entertainment" },
  { id: "7", name: "Sports" },
  { id: "8", name: "Environment" },
];

// eslint-disable-next-line
export function ArticleForm({ article }: { article?: any }) {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		title: article?.title || "",
		slug: article?.slug || "",
		excerpt: article?.excerpt || "",
		content: article?.content || "",
		category: article?.category || "",
		featuredImage: article?.featuredImage || "",
		tags: article?.tags || "",
		isPublished: article?.status === "Published" || false,
		isFeatured: article?.isFeatured || false,
		metaTitle: article?.metaTitle || "",
		metaDescription: article?.metaDescription || "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSwitchChange = (name: string, checked: boolean) => {
		setFormData((prev) => ({ ...prev, [name]: checked }));
	};

	const handleContentChange = (content: string) => {
		setFormData((prev) => ({ ...prev, content }));
	};

	const handleImageUpload = (url: string) => {
		setFormData((prev) => ({ ...prev, featuredImage: url }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			if (article) {
				await updateArticle(article.id, {
					...formData,
					status: formData.isPublished ? "Published" : "Draft",
				});
			} else {
				await createArticle({
					...formData,
					status: formData.isPublished ? "Published" : "Draft",
				});
			}

			router.push("/admin/articles");
		} catch (error) {
			console.error("Error saving article:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const generateSlug = () => {
		const slug = formData.title
			.toLowerCase()
			.replace(/[^\w\s]/gi, "")
			.replace(/\s+/g, "-");

		setFormData((prev) => ({ ...prev, slug }));
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-8">
			<Tabs defaultValue="content">
				<TabsList className="mb-4">
					<TabsTrigger value="content">Content</TabsTrigger>
					<TabsTrigger value="media">Media</TabsTrigger>
					<TabsTrigger value="seo">SEO</TabsTrigger>
					<TabsTrigger value="settings">Settings</TabsTrigger>
				</TabsList>

				<TabsContent value="content" className="space-y-4">
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="title">Title</Label>
							<Input
								id="title"
								name="title"
								value={formData.title}
								onChange={handleChange}
								placeholder="Article title"
								required
							/>
						</div>

						<div className="grid gap-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="slug">Slug</Label>
								<Button
									type="button"
									variant="outline"
									size="sm"
									onClick={generateSlug}
									className="h-8"
									disabled={!formData.title}
								>
									Generate
								</Button>
							</div>
							<Input
								id="slug"
								name="slug"
								value={formData.slug}
								onChange={handleChange}
								placeholder="article-slug"
								required
							/>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="excerpt">Excerpt</Label>
							<Textarea
								id="excerpt"
								name="excerpt"
								value={formData.excerpt}
								onChange={handleChange}
								placeholder="Brief summary of the article"
								className="min-h-[100px]"
							/>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="content">Content</Label>
							<RichTextEditor
								value={formData.content}
								onChange={handleContentChange}
							/>
						</div>
					</div>
				</TabsContent>

				<TabsContent value="media" className="space-y-4">
					<Card>
						<CardContent className="pt-6">
							<div className="grid gap-6">
								<div className="grid gap-2">
									<Label>Featured Image</Label>
									<ImageUpload
										value={formData.featuredImage}
										onChange={handleImageUpload}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="seo" className="space-y-4">
					<Card>
						<CardContent className="pt-6">
							<div className="grid gap-6">
								<div className="grid gap-2">
									<Label htmlFor="metaTitle">Meta Title</Label>
									<Input
										id="metaTitle"
										name="metaTitle"
										value={formData.metaTitle}
										onChange={handleChange}
										placeholder="SEO title (leave blank to use article title)"
									/>
								</div>

								<div className="grid gap-2">
									<Label htmlFor="metaDescription">Meta Description</Label>
									<Textarea
										id="metaDescription"
										name="metaDescription"
										value={formData.metaDescription}
										onChange={handleChange}
										placeholder="SEO description (leave blank to use excerpt)"
										className="min-h-[100px]"
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="settings" className="space-y-4">
					<Card>
						<CardContent className="pt-6">
							<div className="grid gap-6">
								<div className="grid gap-2">
									<Label htmlFor="category">Category</Label>
									<Select
										value={formData.category}
										onValueChange={(value) =>
											handleSelectChange("category", value)
										}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select a category" />
										</SelectTrigger>
										<SelectContent>
											{categories.map((category) => (
												<SelectItem key={category.id} value={category.name}>
													{category.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								<div className="grid gap-2">
									<Label htmlFor="tags">Tags</Label>
									<Input
										id="tags"
										name="tags"
										value={formData.tags}
										onChange={handleChange}
										placeholder="Comma-separated tags"
									/>
								</div>

								<div className="flex items-center space-x-2">
									<Switch
										id="isPublished"
										checked={formData.isPublished}
										onCheckedChange={(checked) =>
											handleSwitchChange("isPublished", checked)
										}
									/>
									<Label htmlFor="isPublished">Publish article</Label>
								</div>

								<div className="flex items-center space-x-2">
									<Switch
										id="isFeatured"
										checked={formData.isFeatured}
										onCheckedChange={(checked) =>
											handleSwitchChange("isFeatured", checked)
										}
									/>
									<Label htmlFor="isFeatured">Feature on homepage</Label>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			<div className="flex justify-end space-x-4">
				<Button
					type="button"
					variant="outline"
					onClick={() => router.push("/admin/articles")}
				>
					Cancel
				</Button>
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting
						? "Saving..."
						: article
							? "Update Article"
							: "Create Article"}
				</Button>
			</div>
		</form>
	);
}
