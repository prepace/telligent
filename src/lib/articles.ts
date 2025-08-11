export async function getArticleById(id: string) {
  // In a real app, you would fetch this from your database
  return {
    id,
    title: "Sample Article",
    slug: "sample-article",
    excerpt: "This is a sample article for demonstration purposes.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Technology",
    featuredImage: "/placeholder.svg",
    tags: "sample, demo, test",
    status: "Published",
    isFeatured: false,
    metaTitle: "",
    metaDescription: "",
    author: "Admin User",
    date: "2023-10-15",
    views: 0,
  }
}

// Mock function to create a new article
// eslint-disable-next-line
export async function createArticle(articleData: Article) {
  console.log("Creating article:", articleData)
  // In a real app, you would save this to your database
  return {
    id: Math.random().toString(36).substring(7),
    ...articleData,
  }
}

// Mock function to update an article
// eslint-disable-next-line
export interface Article {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage: string;
  tags: string;
  status: string;
  isFeatured: boolean;
  metaTitle: string;
  metaDescription: string;
  author: string;
  date: string;
  views: number;
}

export async function updateArticle(id: string, articleData: Article) {
  console.log(`Updating article ${id}:`, articleData);
  // In a real app, you would update this in your database
  return {
    id,
    ...articleData,
  };
}

// Mock function to delete an article
export async function deleteArticle(id: string) {
  console.log(`Deleting article ${id}`)
  // In a real app, you would delete this from your database
  return { success: true }
}

