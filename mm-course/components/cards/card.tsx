import React from "react"
interface CardProps {
  post: any
}
function Card({ post }: CardProps) {
  return (
    <div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={post.imageUrl}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href={post.category.href} className="hover:underline">
                {post.category.name}
              </a>
            </p>
            <a href={post.href} className="mt-2 block">
              <p className="text-lg font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={post.author.href}>
                <span className="sr-only">{post.author.name}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={post.author.imageUrl}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={post.author.href} className="hover:underline">
                  {post.author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
