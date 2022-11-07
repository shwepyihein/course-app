import { Policy, Query } from "../../graphql/generated/gql_types"
import client from "../client"
import { GET_POLICY, TERMS_CONDITIONS } from "./policy.gql"

export const getPolicy = async () => {
  const result = await client.request<Query>(GET_POLICY)

  return result.policy?.data
}

export const getTerms = async () => {
  const result = await client.request<Query>(TERMS_CONDITIONS)

  return result.termAndCondtion?.data
}
