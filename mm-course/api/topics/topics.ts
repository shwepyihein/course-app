import {
  ChannelEntity,
  Query,
  TopicEntity,
} from "../../graphql/generated/gql_types"
import client from "../client"
import { GET_TOPICS_LIST } from "./topics.gql"

export const getTopicsList = async (): Promise<TopicEntity[] | []> => {
  const result = await client.request<Query>(GET_TOPICS_LIST)

  return result.topics?.data ?? []
}
