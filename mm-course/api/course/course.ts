import { CourseEntity, Query } from "../../graphql/generated/gql_types"
import client from "../client"
import { GET_LATEST_COURSE, GET_COURSE_LIST_FILTER } from "./course.gql"

export const getCourseListFIlter = async ({ start = 0, limit = 10 }) => {
  const result = await client.request<Query>(GET_COURSE_LIST_FILTER, {
    limit,
    start,
  })

  const CouserList = result.courses?.data.map((course: CourseEntity) => {
    return {
      id: course.id,
    }
  })

  return {
    data: CouserList,
    meta: result.courses?.meta,
  }
}

export const getCourseFilter = async ({
  limit = 2,
  start = 0,
  filter = [],
  price_type = "free",
}) => {
  const result = await client.request<Query>(GET_COURSE_LIST_FILTER, {
    limit,
    start,
    filter,
    price_type,
  })

  const CouserList = result.courses?.data.map((course: CourseEntity) => {
    return {
      id: course.id,
      slug: course.attributes?.slug,
      categories: course.attributes?.categories?.data,
      name: course.attributes?.name,
      num_lessons: course.attributes?.num_lessons,
      description: course.attributes?.description,
      duration: course.attributes?.duration,
      publishAt: course.attributes?.publishedAt,
      preivew_image: course.attributes?.course_img?.data?.attributes?.url ?? "",
      language: course.attributes?.language,
      author: course.attributes?.author?.data?.attributes?.name ?? "",
    }
  })

  return {
    data: CouserList ?? [],
    meta: result.courses?.meta,
  }
}

export const getLatestCourse = async ({ limit = 6, start = 0 }) => {
  const result = await client.request<Query>(GET_LATEST_COURSE, {
    limit,
    start,
  })

  const CouserList = result.courses?.data.map((course: CourseEntity) => {
    return {
      id: course.id,
      slug: course.attributes?.slug,
      categories: course.attributes?.categories?.data,
      name: course.attributes?.name,
      num_lessons: course.attributes?.num_lessons,
      description: course.attributes?.description,
      duration: course.attributes?.duration,
      publishAt: course.attributes?.publishedAt,
      preivew_image: course.attributes?.course_img?.data?.attributes?.url ?? "",
      language: course.attributes?.language,
      author: course.attributes?.author?.data?.attributes?.name ?? "",
    }
  })

  return CouserList ?? []
}
