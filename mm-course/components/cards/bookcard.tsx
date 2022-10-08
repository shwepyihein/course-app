import { useRouter } from "next/router"
import React from "react"
interface CardProps {
  post: any
  key: number
}
function BookCard({ post, key }: CardProps) {
  const router = useRouter()
  return (
    <div
      key={key}
      onClick={() => {
        router.push(`/book/${post.slug}`)
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
    >
      <div className="">
        <img
          className="h-52 w-full  object-cover"
          src={"http://localhost:1337" + post?.url}
          alt=""
        />
      </div>
      <div className="bg-white p-2">
        <p className="text-md truncate text-center text-gray-900">
          {post.title}
        </p>
      </div>
    </div>
  )
}

export default BookCard
