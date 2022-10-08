import { Blog, BlogEntity, Query } from "../../graphql/generated/gql_types"
import client from "../client"
import {
  BLOG_DETAIL,
  FETCH_BLOG_LATEST,
  FETCH_BLOG_RECOMMEND,
  GET_BLOG_FILTER,
  GET_BLOG_LIST,
} from "./getblog.gql"

export const getbloglistQuery = async ({ start = 0, limit = 10 }) => {
  const result = await client.request<Query>(GET_BLOG_LIST, {
    limit,
    start,
  })

  const blogs = result.blogs?.data.map((insight: BlogEntity) => {
    return {
      id: insight.id,
      title: insight.attributes?.title,
      slug: insight.attributes?.slug,
      url: insight.attributes?.seo_image?.data?.attributes?.url ?? "",
      short_description: insight.attributes?.short_description,
      date: insight.attributes?.publishedAt,
    }
  })

  return {
    data: blogs,
    meta: result.blogs?.meta,
  }
}

export const getBlogFilter = async ({
  locale = "en",
  limit = 2,
  start = 0,
  filter = [],
}) => {
  const result = await client.request<Query>(GET_BLOG_FILTER, {
    locale,
    limit,
    start,
    filter,
  })

  const blogs = result.blogs?.data.map((blog: BlogEntity) => {
    return {
      id: blog.id,
      slug: blog.attributes?.slug,
      title: blog.attributes?.title,
      url: blog.attributes?.seo_image?.data?.attributes?.url,
      short_description: blog.attributes?.short_description,
      date: blog.attributes?.publishedAt,
      // tag: blog.attributes?.tags,
    }
  })

  return {
    data: blogs,
    meta: result.blogs?.meta,
  }
}

export const getBlogsRecommend = async ({
  locale = "en",
  start = 0,
  limit = 2,
}): Promise<BlogEntity[]> => {
  const result = await client.request<Query>(FETCH_BLOG_RECOMMEND, {
    locale,
    limit,
    start,
  })

  const blogs = result.blogs?.data.map((blog: BlogEntity) => {
    return {
      id: blog.id,
      slug: blog.attributes?.slug,
      title: blog.attributes?.title,
      url: blog.attributes?.seo_image?.data?.attributes?.url,
      date: blog.attributes?.publishedAt,
      // tag: blog.attributes?.tags,
    }
  })

  return blogs ?? []
}

export const getBlogLatest = async ({
  start = 0,
  limit = 3,
}): Promise<BlogEntity[]> => {
  const result = await client.request<Query>(FETCH_BLOG_LATEST, {
    limit,
    start,
  })

  const books = result.blogs?.data.map((blog: BlogEntity) => {
    return {
      id: blog.id,
      slug: blog.attributes?.slug,
      title: blog.attributes?.title,
      url: blog.attributes?.seo_image?.data?.attributes?.url,
      date: blog.attributes?.publishedAt,
    }
  })

  return books ?? []
}

export const getBlogDetail = async ({ id = "" }): Promise<Blog | {}> => {
  const result = await client.request<Query>(BLOG_DETAIL, {
    blogId: id,
  })

  return result.blog?.data?.attributes ?? {}
}
