import { gql } from "graphql-request"

export const GET_CHANNEL_LIST = gql`
  query getChannelList {
    channels {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`
