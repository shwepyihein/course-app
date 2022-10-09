import { CategoryEntity, Query } from "../../graphql/generated/gql_types"
import client from "../client"
import { GET_CATEGORY_LIST } from "./category.gql"

export const getCategoryList = async (): Promise<CategoryEntity[] | {}> => {
  const result = await client.request<Query>(GET_CATEGORY_LIST)

  return result.categories?.data ?? {}
}
