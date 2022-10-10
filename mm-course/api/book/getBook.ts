import { Book, BookEntity, Query } from "../../graphql/generated/gql_types"
import client from "../client"
import {
  FETCH_BOOK_DETAIL,
  FETCH_BOOK_LATEST,
  FETCH_BOOK_RECOMMEND,
  GET_BOOK_LIST,
} from "./getBook.gql"

export const getbooklistQuery = async ({ start = 0, limit = 10 }) => {
  const result = await client.request<Query>(GET_BOOK_LIST, {
    limit,
    start,
  })

  const blogs = result.books?.data.map((book: BookEntity) => {
    return {
      id: book.id,
      slug: book.attributes?.slug,
      title: book.attributes?.name,
      url: book.attributes?.book_img?.data?.attributes?.url ?? "",
      date: book.attributes?.publishedAt,
    }
  })

  return {
    data: blogs,
    meta: result.blogs?.meta,
  }
}

export const getBookRecommend = async ({
  start = 0,
  limit = 3,
}): Promise<BookEntity[]> => {
  const result = await client.request<Query>(FETCH_BOOK_RECOMMEND, {
    limit,
    start,
  })

  const books = result.books?.data.map((book: BookEntity) => {
    return {
      id: book.id,
      name: book.attributes?.name,
      slug: book.attributes?.slug,
      url: book.attributes?.book_img?.data?.attributes?.url ?? "",
      date: book.attributes?.publishedAt,
      author: book.attributes?.author?.data?.attributes?.name ?? "",
    }
  })

  return books ?? []
}

export const getBookLatest = async ({
  start = 0,
  limit = 3,
}): Promise<BookEntity[]> => {
  const result = await client.request<Query>(FETCH_BOOK_LATEST, {
    limit,
    start,
  })

  const books = result.books?.data.map((book: BookEntity) => {
    return {
      id: book.id,
      title: book.attributes?.name,
      slug: book.attributes?.slug,
      url: book.attributes?.book_img?.data?.attributes?.url ?? "",
      date: book.attributes?.publishedAt,
      publishedAt: book.attributes?.publishedAt,
      // author: book.attributes?.author?.data?.attributes?.name,
    }
  })

  return books ?? []
}

export const getBookDetail = async ({
  slug = "",
}): Promise<Book | Record<string, never>> => {
  const result = await client.request<Query>(FETCH_BOOK_DETAIL, {
    slug,
  })

  const detail = result.books?.data[0]?.attributes ?? {}

  return detail ?? {}
}
