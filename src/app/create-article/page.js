import { ChevronDown, Upload, X } from "lucide-react"

export default function ArticleSubmissionPage() {
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
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-8">
              {/* Article Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Article Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                    placeholder="Enter a compelling title"
                  />
                </div>
              </div>

              {/* Author Information */}
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="author-name" className="block text-sm font-medium text-gray-700">
                    Author Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="author-name"
                      id="author-name"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="author-email" className="block text-sm font-medium text-gray-700">
                    Author Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="author-email"
                      id="author-email"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                    />
                  </div>
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="mt-1 relative">
                  <select
                    id="category"
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

              {/* Featured Image */}
              <div>
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
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Article Content
                </label>
                <div className="mt-1">
                  <textarea
                    id="content"
                    name="content"
                    rows={15}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                    placeholder="Write your article content here..."
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">You can use Markdown for formatting.</p>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                  Tags
                </label>
                <div className="mt-1">
                  <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md">
                    <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center">
                      Example Tag <X className="ml-1 h-3 w-3 cursor-pointer" />
                    </div>
                    <input
                      type="text"
                      id="tags"
                      className="flex-grow outline-none text-sm"
                      placeholder="Add tags separated by comma"
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">Add up to 5 tags to help readers discover your article</p>
              </div>

              {/* SEO Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">SEO Settings</h3>
                <p className="mt-1 text-sm text-gray-500">Optimize your article for search engines</p>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">
                      Meta Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="meta-title"
                        id="meta-title"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Recommended: 50-60 characters</p>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">
                      Meta Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="meta-description"
                        name="meta-description"
                        rows={3}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Recommended: 150-160 characters</p>
                  </div>
                </div>
              </div>

              {/* Publication Settings */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Publication Settings</h3>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="publication-status" className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <div className="mt-1 relative">
                      <select
                        id="publication-status"
                        name="publication-status"
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

                  <div className="sm:col-span-3">
                    <label htmlFor="publish-date" className="block text-sm font-medium text-gray-700">
                      Publish Date
                    </label>
                    <div className="mt-1">
                      <input
                        type="datetime-local"
                        name="publish-date"
                        id="publish-date"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>
                  </div>
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
      </main>
    </div>
  )
}
