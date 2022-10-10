import { gql } from "graphql-request"

export const GET_TOPICS_LIST = gql`
  query getTopicsList {
    topics {
      data {
        id
        attributes {
          name
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
