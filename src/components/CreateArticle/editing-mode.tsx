"use client";

import { ChevronDown, Upload, X } from "lucide-react";
import Image from "next/image";
import { useId } from "react";

interface ChildProps {
	setImageDescription: (value: string) => void;
	setMetaDescription: (value: string) => void;
	setFeaturedImage: (value: File | null) => void;
	setAuthorEmail: (value: string) => void;
	setDescription: (value: string) => void;
	setPublishDate: (value: string) => void;
	setAuthorName: (value: string) => void;
	setMetaTitle: (value: string) => void;
	setTagsInput: (value: string) => void;
	handleSubmit: (e: React.FormEvent) => void;
	setCategory: (value: string) => void;
	setContent: (value: string) => void;
	setStatus: (value: string) => void;
	setTitle: (value: string) => void;
	setTags: (value: string[]) => void;
	setSlug: (value: string) => void;
	tags: string[];
	slug: string;
	title: string;
	status: string;
	content: string;
	category: string;
	metaTitle: string;
	tagsInput: string;
	authorName: string;
	authorEmail: string;
	description: string;
	publishDate: string;
	featuredImage: File | null;
	metaDescription: string;
	imageDescription: string;
}

export default function EditingMode({
	imageDescription,
	metaDescription,
	featuredImage,
	authorEmail,
	description,
	publishDate,
	authorName,
	metaTitle,
	tagsInput,
	category,
	content,
	status,
	title,
	tags,
	slug,
	setTags,
	setSlug,
	setTitle,
	setStatus,
	setContent,
	setCategory,
	setTagsInput,
	setMetaTitle,
	// handleSubmit,
	setAuthorName,
	setPublishDate,
	setAuthorEmail,
	setDescription,
	setFeaturedImage,
	setMetaDescription,
	setImageDescription,
}: ChildProps) {
	const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		setTagsInput(value);

		if (event.key === " " || event.key === "Enter") {
			const newTag = value.trim();
			if (newTag && !tags.includes(newTag)) {
				setTags([...tags, newTag]);
			}
			setTagsInput("");
		}
	};

	const deleteTag = (tagToDelete: string) => {
		setTags(tags.filter((tag) => tag !== tagToDelete));
	};
	const fileInputId = useId();

	return (
		<div className="bg-white shadow overflow-hidden sm:rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<form className="space-y-8">
					{/* Article Title */}
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700"
						>
							Article Title
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								id={`${fileInputId}-title`}
								className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
								placeholder="Enter a compelling title"
							/>
						</div>
					</div>
					{/* Author Information */}
					<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="author-name"
								className="block text-sm font-medium text-gray-700"
							>
								Author Name
							</label>
							<div className="mt-1">
								<input
									type="text"
									value={authorName}
									onChange={(e) => setAuthorName(e.target.value)}
									name="author-name"
									id={`${fileInputId}-author-name`}
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
								/>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="author-email"
								className="block text-sm font-medium text-gray-700"
							>
								Author Email
							</label>
							<div className="mt-1">
								<input
									type="email"
									value={authorEmail}
									onChange={(e) => setAuthorEmail(e.target.value)}
									name="author-email"
									id={`${fileInputId}-author-email`}
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
								/>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						{/* Category Selection */}
						<div className="sm:col-span-3">
							<label
								htmlFor="category"
								className="block text-sm font-medium text-gray-700"
							>
								Category
							</label>
							<div className="mt-1 relative">
								<select
									id={`${fileInputId}-category`}
									value={category}
									onChange={(e) => setCategory(e.target.value)}
									name="category"
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border appearance-none pr-10"
								>
									<option value="">Select a category</option>
									<option value="politics">Politics</option>
									<option value="business">Business</option>
									<option value="technology">Technology</option>
									<option value="science">Science</option>
									<option value="health">Health</option>
									<option value="sports">Sports</option>
									<option value="entertainment">Entertainment</option>
									<option value="opinion">Opinion</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<ChevronDown className="h-4 w-4" />
								</div>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="author-email"
								className="block text-sm font-medium text-gray-700"
							>
								Slug
							</label>
							<div className="mt-1">
								<input
									type="text"
									value={slug}
									onChange={(e) => setSlug(e.target.value)}
									name="slug"
									id={`${fileInputId}-slug`}
									className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
								/>
							</div>
						</div>
					</div>
					{/* Description */}
					<div>
						<label
							htmlFor="content"
							className="block text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<div className="mt-1">
							<textarea
								id={`${fileInputId}-description`}
								name="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								rows={5}
								className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2 resize-none"
								placeholder="Write your description here..."
							></textarea>
						</div>
					</div>
					{/* Featured Image */}
					{/* <div>
            <label className="block text-sm font-medium text-gray-700">Featured Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => setFeaturedImage(e.target.files[0])}/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div> */}
					<div>
						<label
							htmlFor={`${fileInputId}-file-upload`}
							className="block text-sm font-medium text-gray-700"
						>
							Featured Image
						</label>

						<div
							className={`mt-1 relative flex justify-center px-6 pt-5 pb-6 border-2 rounded-md ${
								featuredImage
									? "border-blue-500 bg-blue-50"
									: "border-gray-300 border-dashed"
							}`}
						>
							{featuredImage ? (
								// Display Preview When File is Selected
								<>
									<Image
										src={URL.createObjectURL(featuredImage)}
										alt="Uploaded preview"
										width={192}
										height={192}
										className="max-h-48 rounded-md shadow-md object-contain"
									/>
									<button
										type="button"
										className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
										onClick={() => {
											setFeaturedImage(null);
										}}
									>
										Remove
									</button>
								</>
							) : (
								// Default Upload UI
								<div className="space-y-1 text-center">
									<Upload className="mx-auto h-12 w-12 text-gray-400" />
									<div className="flex text-sm text-gray-600">
										<label
											htmlFor={`${fileInputId}-file-upload`}
											className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
										>
											<span>Upload a file</span>
											<input
												id={`${fileInputId}-file-upload`}
												name="file-upload"
												type="file"
												className="sr-only"
												accept="image/*"
												onChange={(e) => {
													const f = e.target.files?.[0] || null;
													if (f) setFeaturedImage(f);
												}}
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs text-gray-500">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							)}
						</div>
					</div>
					{/* Image Description */}
					<div>
						<label
							htmlFor={`${fileInputId}-image-description`}
							className="block text-sm font-medium text-gray-700"
						>
							Featured Image Description
						</label>
						<div className="mt-1">
							<textarea
								id={`${fileInputId}-image-description`}
								name="image-description"
								value={imageDescription}
								onChange={(e) => setImageDescription(e.target.value)}
								rows={5}
								className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2 resize-none"
								placeholder="Write your image description here..."
							></textarea>
						</div>
					</div>
					{/* Article Content */}
					<div>
						<label
							htmlFor={`${fileInputId}-content`}
							className="block text-sm font-medium text-gray-700"
						>
							Article Content
						</label>
						<div className="mt-1">
							<textarea
								id={`${fileInputId}-content`}
								name="content"
								value={content}
								onChange={(e) => setContent(e.target.value)}
								rows={15}
								className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
								placeholder="Write your article content here..."
							></textarea>
						</div>
						<p className="mt-2 text-sm text-gray-500">
							You can use Markdown for formatting.
						</p>
					</div>
					{/* Tags */}
					<div>
						<label
							htmlFor={`${fileInputId}-tags`}
							className="block text-sm font-medium text-gray-700"
						>
							Tags
						</label>
						<div className="mt-1">
							<div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md">
								{tags.map((tag) => (
									<div
										key={tag}
										className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center justify-center"
									>
										{tag}
										<button
											type="button"
											aria-label={`Remove tag ${tag}`}
											className="ml-1 h-3 w-3 text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
											onClick={() => deleteTag(tag)}
										>
											<X className="h-[14px]" />
										</button>
									</div>
								))}
								<input
									type="text"
									id={`${fileInputId}-tags`}
									value={tagsInput}
									onChange={(e) => setTagsInput(e.target.value)}
									onKeyUp={handleInput}
									className="flex-grow outline-none text-sm"
									placeholder="Add tags separated by space"
								/>
							</div>
						</div>
						<p className="mt-2 text-sm text-gray-500">
							Add up to 5 tags to help readers discover your article
						</p>
					</div>
					{/* SEO Section */}
					<div className="border-t border-gray-200 pt-8">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							SEO Settings
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							Optimize your article for search engines
						</p>
						<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
							<div className="sm:col-span-6">
								<label
									htmlFor={`${fileInputId}-meta-title`}
									className="block text-sm font-medium text-gray-700"
								>
									Meta Title
								</label>
								<div className="mt-1">
									<input
										type="text"
										value={metaTitle}
										onChange={(e) => setMetaTitle(e.target.value)}
										name="meta-title"
										id={`${fileInputId}-meta-title`}
										className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
									/>
								</div>
								<p className="mt-2 text-sm text-gray-500">
									Recommended: 50-60 characters
								</p>
							</div>
							<div className="sm:col-span-6">
								<label
									htmlFor={`${fileInputId}-meta-description`}
									className="block text-sm font-medium text-gray-700"
								>
									Meta Description
								</label>
								<div className="mt-1">
									<textarea
										id={`${fileInputId}-meta-description`}
										value={metaDescription}
										onChange={(e) => setMetaDescription(e.target.value)}
										name="meta-description"
										rows={3}
										className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
									></textarea>
								</div>
								<p className="mt-2 text-sm text-gray-500">
									Recommended: 150-160 characters
								</p>
							</div>
						</div>
					</div>
					{/* Publication Settings */}
					<div className="border-t border-gray-200 pt-8">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Publication Settings
						</h3>
						<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="publication-status"
									className="block text-sm font-medium text-gray-700"
								>
									Status
								</label>
								<div className="mt-1 relative">
									<select
										id={`${fileInputId}-publication-status`}
										name="publication-status"
										value={status}
										onChange={(e) => setStatus(e.target.value)}
										className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border appearance-none pr-10"
									>
										<option value="draft">Draft</option>
										<option value="pending">Pending Review</option>
										<option value="published">Published</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<ChevronDown className="h-4 w-4" />
									</div>
								</div>
							</div>
							{status === "published" && (
								<div className="sm:col-span-3">
									<label
										htmlFor="publish-date"
										className="block text-sm font-medium text-gray-700"
									>
										Publish Date
									</label>
									<div className="mt-1">
										<input
											type="datetime-local"
											value={publishDate}
											onChange={(e) => setPublishDate(e.target.value)}
											name="publish-date"
											id={`${fileInputId}-publish-date`}
											className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
										/>
									</div>
								</div>
							)}
						</div>
					</div>
					{/* Form Actions */}
					<div className="pt-5 border-t border-gray-200">
						<div className="flex justify-end">
							<button
								type="button"
								className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Cancel
							</button>
							<button
								type="button"
								className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
