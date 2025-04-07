"use client"

import { useState, type FormEvent } from "react"

import Image from "next/image"
import image03 from "../../../public/image03.jpeg"

type Comment = {
  id: string
  author: string
  authorImage: any
  date: string
  content: string
  likes: number
  replies?: Comment[]
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Jane Cooper",
      authorImage: image03,
      date: "5 hours ago",
      content: "This article was incredibly insightful! I especially appreciated the detailed analysis of the topic.",
      likes: 5,
    },
    {
      id: "2",
      author: "Alex Morgan",
      authorImage: image03,
      date: "1 day ago",
      content:
        "I have a different perspective on this. While I agree with most points, I think there are some nuances that weren't addressed.",
      likes: 2,
      replies: [
        {
          id: "2-1",
          author: "Sam Wilson",
          authorImage: image03,
          date: "20 hours ago",
          content: "Could you elaborate on which nuances you feel were missed? I'd love to hear your thoughts!",
          likes: 1,
        },
      ],
    },
    {
      id: "3",
      author: "Taylor Swift",
      authorImage: image03,
      date: "2 days ago",
      content: "Thanks for sharing this information. It helped me understand the topic much better.",
      likes: 8,
    },
  ])

  // Track which comments have their replies open
  const [openReplies, setOpenReplies] = useState<Record<string, boolean>>({
    "2": true, // Initially open the replies for comment with id '2'
  })

  // Track which comment is being replied to
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const [newComment, setNewComment] = useState("")
  const [replyContent, setReplyContent] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Current User",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "Just now",
      content: newComment,
      likes: 0,
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleReplySubmit = (e: FormEvent, commentId: string) => {
    e.preventDefault()
    if (!replyContent.trim() || !commentId) return

    const reply: Comment = {
      id: `${commentId}-${Date.now()}`,
      author: "Current User",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "Just now",
      content: replyContent,
      likes: 0,
    }

    // Find the comment being replied to and add the reply
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        // Ensure replies array exists
        const currentReplies = comment.replies || []
        return {
          ...comment,
          replies: [...currentReplies, reply],
        }
      }
      return comment
    })

    setComments(updatedComments)
    setReplyContent("")
    setReplyingTo(null)

    // Make sure replies are visible for this comment
    setOpenReplies((prev) => ({
      ...prev,
      [commentId]: true,
    }))
  }

  const toggleReplies = (commentId: string) => {
    setOpenReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }))
  }

  const startReply = (commentId: string) => {
    setReplyingTo(commentId)
    setReplyContent("")
  }

  const cancelReply = () => {
    setReplyingTo(null)
    setReplyContent("")
  }

  return (
    <div className="comment-section w-full lg:w-auto lg:col-span-4 lg:ml-8">
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">Comments ({comments.length})</h2>

        {/* Main comment form - only show if not replying to a specific comment */}
        {!replyingTo && (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={image03}
                  alt="Your avatar"
                  className="rounded-full w-[40px] h-[40px]"
                />
              </div>
              <div className="flex-grow">
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-200 focus:border-transparent resize-none min-h-[80px]"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    disabled={!newComment.trim()}
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={comment.authorImage || "/placeholder.svg"}
                    alt={`${comment.author}'s avatar`}
                    className="rounded-full w-[40px] h-[40px]"
                  />
                </div>
                <div className="flex-grow">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-sm">{comment.author}</h3>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-sm text-gray-700">{comment.content}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      {comment.likes}
                    </button>
                    <button className="hover:text-gray-700" onClick={() => startReply(comment.id)}>
                      Reply
                    </button>

                    {/* Show toggle button only if comment has replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <button
                        onClick={() => toggleReplies(comment.id)}
                        className="hover:text-gray-700 flex items-center gap-1"
                      >
                        {openReplies[comment.id] ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            Hide replies
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Show {comment.replies.length} {comment.replies.length === 1 ? "reply" : "replies"}
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Reply form - only show for the comment being replied to */}
                  {replyingTo === comment.id && (
                    <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="mt-4 ml-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={image03}
                            alt="Your avatar"
                            className="rounded-full w-[40px] h-[40px]"
                          />
                        </div>
                        <div className="flex-grow">
                          <textarea
                            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-200 focus:border-transparent resize-none min-h-[80px]"
                            placeholder={`Reply to ${comment.author}...`}
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            autoFocus
                          ></textarea>
                          <div className="flex justify-end gap-2 mt-2">
                            <button
                              type="button"
                              onClick={cancelReply}
                              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                              disabled={!replyContent.trim()}
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* Replies - conditionally rendered based on openReplies state */}
                  {comment.replies && comment.replies.length > 0 && openReplies[comment.id] && (
                    <div className="ml-6 mt-4 space-y-4 transition-all duration-300 ease-in-out">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Image
                              src={reply.authorImage || "/placeholder.svg"}
                              alt={`${reply.author}'s avatar`}
                              className="rounded-full w-[35px] h-[35px]"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex justify-between items-center mb-1">
                                <h3 className="font-medium text-sm">{reply.author}</h3>
                                <span className="text-xs text-gray-500">{reply.date}</span>
                              </div>
                              <p className="text-sm text-gray-700">{reply.content}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                              <button className="flex items-center gap-1 hover:text-gray-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                  />
                                </svg>
                                {reply.likes}
                              </button>
                              <button className="hover:text-gray-700" onClick={() => startReply(comment.id)}>
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}