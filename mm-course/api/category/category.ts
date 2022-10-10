import {
  CategoryEntity,
  Query,
  TopicEntity,
} from "../../graphql/generated/gql_types"
import client from "../client"
import { GET_CATEGORY_LIST, GET_CATEGORY_ROUTE } from "./category.gql"

export const getCategoryList = async (): Promise<CategoryEntity[] | {}> => {
  const result = await client.request<Query>(GET_CATEGORY_LIST)

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
          route: `/category?type=${item.attributes?.slug}`,
        }
      }
    )
    console.log(filterCategory, "s")
    return {
      id: item.id,
      name: item.attributes?.name,
      route: `/topics/${item.id}`,
      submenu: filterCategory ?? [],
    }
  })
  console.log(filterRoute)
  return filterRoute ?? []
}
