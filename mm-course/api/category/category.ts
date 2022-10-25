import {
  Category,
  CategoryEntity,
  Query,
  TopicEntity,
} from "../../graphql/generated/gql_types"
import client from "../client"
import {
  CATEGORY_COURSE_LIST,
  GET_CATEGORY_LIST,
  GET_CATEGORY_ROUTE,
  Get_CateoryCourse_List,
  TOPIC_COURSE_LIST,
} from "./category.gql"

export const getCategoryList = async (): Promise<CategoryEntity[] | {}> => {
  const result = await client.request<Query>(GET_CATEGORY_LIST, {
    start: 0,
    limit: 100,
  })

  return result.categories?.data ?? {}
}

export const getCategoryRoute = async () => {
  const result = await client.request<Query>(GET_CATEGORY_ROUTE)
  console.log(result)
  const filterRoute = result.topics?.data.map((item: TopicEntity) => {
    const filterCategory = item.attributes?.categories?.data.map(
      (item: CategoryEntity) => {
        return {
          name: item.attributes?.name,
          route: `/category/${item.attributes?.slug}-${item.id}`,
        }
      }
    )
    console.log(
      `/topics/${item.attributes?.name
        ?.toLocaleLowerCase()
        .split(" ")
        .join("-")}-${item.id}`,
      "s"
    )
    return {
      id: item.id,
      name: item.attributes?.name,
      route: `/topics/${item.attributes?.name
        ?.toLocaleLowerCase()
        .split(" ")
        .join("-")}-${item.id}`,
      submenu: filterCategory ?? [],
    }
  })
  console.log(filterRoute)
  return filterRoute ?? []
}

export const getCategoryCourseList = async ({
  start = 0,
  limit = 6,
}): Promise<CategoryEntity[] | []> => {
  const result = await client.request<Query>(Get_CateoryCourse_List, {
    limit,
    start,
  })

  return result.categories?.data ?? []
}

export const getTopicCourseListDetail = async ({
  id = "",
}): Promise<Category | {}> => {
  const result = await client.request<Query>(TOPIC_COURSE_LIST, {
    topicId: id,
  })

  return result.courses?.data ?? {}
}

export const getCategoryCourseListDetail = async ({
  id = "",
}): Promise<Category | {}> => {
  const result = await client.request<Query>(CATEGORY_COURSE_LIST, {
    categoryId: id,
  })
  console.log()
  return result.courses?.data ?? {}
}
