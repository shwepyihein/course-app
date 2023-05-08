import { Query } from "../../graphql/generated/gql_types"
import client from "../client"
import { MUTATION_LOGIN, MUTATION_Register } from "./index.gql"

export const Login_user = async (data: any) => {
  const result = await client.request<Query>(MUTATION_LOGIN, { input: data })

  return result
}

export const register_user = async (data: any) => {
  const result = await client.request<Query>(MUTATION_Register, { input: data })
  console.log(result)
  return result
}
