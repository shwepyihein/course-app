import { ChannelEntity, Query } from "../../graphql/generated/gql_types"
import client from "../client"
import { GET_CHANNEL_LIST } from "./channel.gql"

export const getChannelList = async (): Promise<ChannelEntity[] | {}> => {
  const result = await client.request<Query>(GET_CHANNEL_LIST)

  return result.channels?.data ?? {}
}
